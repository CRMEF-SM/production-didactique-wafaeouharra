<template>
  <main class="standard-width standard-height  relative">
    <div
      v-if="isGetUser"
      class="
        absolute
        top-0
        right-0
        bottom-0
        left-0
        bg-shadow
        z-100
        flex
        items-center
        justify-center
      "
    >
      <div v-if="currentUser" class="bg-white p-4 flex flex-col items-center">
        <input
          type="text"
          v-model="currentUser.id"
          class="p-2 border-2 border-gray-200"
        />
        <button class="py-2 px-4 bg-yellow-300 border" @click="initSockets">
          Accept
        </button>
      </div>
    </div>
    <div
      v-else
      class="flex absolute top-0 sm:top-6 right-0 bottom-0 sm:bottom-6 left-0"
    >
      <transition name="slide-fade-left">
        <div
          v-show="!isMobile || (isMobile && !showInMobile)"
          class="contacts-area sm:rounded-l-xl border border-r-0 sm:w-5/12"
          :class="{ mobile: isMobile }"
        >
          <div class="flex flex-col h-full mb-2">
            <div class="py-2 px-2 flex items-center">
              <div
                v-show="showSearch !== 'contacts'"
                class="flex-1 p-1 flex items-center"
              >
                <h2 class="p-1 text-xl text-gray-600">Messages</h2>
                <span class="messages-count">7</span>
              </div>
              <div class="flex items-center justify-end w-full relative">
                <transition name="slide-fade">
                  <input
                    v-if="showSearch == 'contacts'"
                    autofocus
                    type="text"
                    class="
                      border
                      w-full
                      text-sm text-gray-600
                      p-2
                      pl-4
                      bg-gray-light
                      rounded-2xl
                      focus:outline-none
                      mr-1
                    "
                    v-model="contactsSearchKey"
                  />
                </transition>
                <button
                  v-if="showSearch != 'contacts'"
                  class="p-1 rounded-xl hover:bg-gray-light"
                  @click="showSearch = 'contacts'"
                  :class="showSearch == 'contacts' ? '' : ''"
                >
                  <svg
                    viewBox="0 0 24 24"
                    height="25px"
                    width="35px"
                    class="svg-gra"
                  >
                    <path
                      fill="currentColor"
                      d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
                    ></path>
                  </svg>
                </button>
                <button
                  v-show="showSearch == 'contacts'"
                  class="p-1 rounded-xl hover:bg-gray-light"
                  @click="(showSearch = ''), (contactsSearchKey = '')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-gray h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="py-2 my-2 px-2 flex items-center justify-around">
              <button
                @click="contactsTab = 'all'"
                class="p-1 hover:bg-gary-200 text-sm text-gray-600"
                :class="{
                  'border-b-2 text-gray-800 border-gray-800 font-bold':
                    contactsTab == 'all',
                }"
              >
                All conversations
              </button>
              <button
                @click="contactsTab = 'groups'"
                class="p-1 hover:bg-gary-200 text-sm text-gray-600"
                :class="{
                  'border-b-2 text-gray-800 border-gray-800 font-bold':
                    contactsTab == 'groups',
                }"
              >
                Groups
              </button>
              <button
                @click="contactsTab = 'status'"
                class="p-1 hover:bg-gary-200 text-sm text-gray-600"
                :class="{
                  'border-b-2 text-gray-800 border-gray-800 font-bold':
                    contactsTab == 'Status',
                }"
              >
                Status
              </button>
              <button
                @click="contactsTab = 'archived'"
                class="p-1 hover:bg-gary-200 text-sm text-gray-600"
                :class="{
                  'border-b-2 text-gray-800 border-gray-800 font-bold':
                    contactsTab == 'archived',
                }"
              >
                Archived
              </button>
            </div>
            <!-- all conversations -->
            <transition name="slide-fade">
              <div
                v-if="contactsLoaded"
                v-show="contactsTab == 'all'"
                class="flex-1 overflow-y-auto mb-2"
              >
                <div
                  @click="openChat(contact.id)"
                  class="py-2 px-1 hover:bg-gray-100 cursor-pointer"
                  v-for="(contact, index) in contacts"
                  :key="index"
                >
                  <div class="flex">
                    <div class="profile-img relative">
                      <img
                        :src="contact.profileImg"
                        alt=""
                        style="width: 100%; height: 100%"
                      />
                      <div
                        class="account-status"
                        :class="true ? 'bg-green-300' : 'bg-red-300'"
                      ></div>
                    </div>
                    <div class="flex-1 flex truncate flex-col p-1">
                      <span class="leading-4 truncate text-gray-500 semiBold">{{
                        contact.username
                      }}</span>
                      <span class="text-xs truncate text-gray-500 opacity-80">{{
                        contact.conversation.lastMessage.payload
                      }}</span>
                    </div>
                    <div class="flex flex-col p-1 items-center">
                      <span
                        class="
                          leading-4
                          text-xs text-gray-500
                          opacity-80
                          font-light
                        "
                        >{{
                          $engine.getDiffTime(
                            contact.conversation.lastMessage.time
                          )
                        }}</span

                      >
                      <span
                        v-if="contact.unreadMessagesCount"
                        class="messages-count"
                        >{{ contact.unreadMessagesCount }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <!-- groups -->
            <transition name="slide-fade">
              <div
                v-show="contactsTab == 'groups'"
                class="flex-1 overflow-y-auto"
              >
                <div
                  @click="openChat(index)"
                  class="py-2 px-1 hover:bg-yellow-light cursor-pointer"
                  v-for="(contact, index) in contacts"
                  :key="index"
                >
                  <div class="flex">group</div>
                </div>
              </div>
            </transition>
            <!-- Status -->
            <transition name="slide-fade">
              <div
                v-show="contactsTab == 'status'"
                class="flex-1 overflow-y-auto bg-red-300"
              >
                <div
                  @click="openChat(index)"
                  class="py-2 px-1 hover:bg-yellow-light cursor-pointer"
                  v-for="(contact, index) in contacts"
                  :key="index"
                >
                  <div class="flex">status</div>
                </div>
              </div>
            </transition>
            <!-- archived -->
            <transition name="slide-fade">
              <div
                v-show="contactsTab == 'archived'"
                class="flex-1 overflow-y-auto"
              >
                <div
                  @click="openChat(index)"
                  class="py-2 px-1 hover:bg-yellow-light cursor-pointer"
                  v-for="(contact, index) in contacts"
                  :key="index"
                >
                  <div class="flex">archived</div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>
      <transition name="slide-fade-right">
        <div
          v-show="!isMobile || (isMobile && showInMobile)"
          class="
            messages-area
            sm:rounded-r-xl
            border border-l-0
            w-full
            sm:w-7/12
          "
          :class="{ mobile: isMobile }"
        >
          <div v-if="currentContact" class="w-full h-full flex flex-col">
            <div
              class="py-2 px-2 border-b h-58 flex items-center justify-between"
            >
              <div class="flex">
                <button @click="showInMobile = false" v-if="isMobile" class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="color-gold h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </button>
                <div class="profile-img relative">
                  <img
                    :src="currentContact.profileImg"
                    alt=""
                    style="width: 100%; height: 100%"
                  />
                  <div
                    class="account-status"
                    :class="true ? 'bg-green-300' : 'bg-red-300'"
                  ></div>
                </div>
                <div class="flex-1 flex flex-col px-1 ml-2">
                  <span class="text-gray-500 leading-4 pt-1 semiBold">{{
                    currentContact.username
                  }}</span>
                  <span class="text-xs leading-4 text-gray-500 opacity-80">{{
                    currentContact.lastSeen
                  }}</span>
                </div>
              </div>
              <div class="flex justify-end"></div>
              <!-- {{currentConversation.messages.length}} -->
              <!-- <input type="text"> -->
            </div>
            <div
              class="
                flex-1
                overflow-y-auto overflow-x-hidden
                relative
                messages-box
              "
              id="messages-scroll-box"
            >
              <div
                class="p-2 w-full z-20"
                v-for="(message, index) in currentContact.conversation.messages"
                :key="index"
              >
                <SectionsChatMessage :message="message" :userID="userID" />
              </div>
              <div
                v-show="showFileOptions"
                class="
                  fixed
                  bottom-in-animate bottom-2
                  left-2
                  bg-gray-600
                  flex
                  p-1
                  rounded
                  text-white
                "
                :class="
                  isMobile ? 'flex flex-col' : 'right-5 grid grid-cols-3 gap-3'
                "
              >
                <div
                  class="
                    flex
                    cursor-pointer
                    flex-col
                    items-center
                    relative
                    op-file
                  "
                  @click="fileAction('gallery')"
                >
                  <div
                    class="
                      relative
                      cursor-pointer
                      rounded-3xl
                      hover:bg-gray-700
                      p-1
                    "
                    style="width: 40px; height: 40px"
                  >
                    <span
                      class="
                        z-0
                        absolute
                        top-0
                        right-0
                        left-0
                        bottom-0
                        cursor-pointer
                        rounded-3xl
                        hover:bg-gray-700
                        p-2
                      "
                      v-html="getSvg('gallery')"
                    ></span>
                  </div>
                  <input
                    class="
                      z-20
                      opacity-0
                      absolute
                      top-0
                      right-0
                      left-0
                      bottom-0
                    "
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    @change="uploadImages($event)"
                    id=""
                    multiple
                  />
                  <span class="text-center text-xs">Gallery</span>
                </div>
                <div
                  class="flex cursor-pointer flex-col items-center op-file"
                  v-for="(option, index) in fileOptions"
                  :key="index"
                  @click="fileAction(option.action)"
                >
                  <span
                    class="rounded-3xl p-1"
                    v-html="getSvg(option.action)"
                  ></span>
                  <span class="text-center text-xs">{{ option.name }}</span>
                </div>
              </div>
            </div>
            <div class="py-2 border-t flex items-center w-full h-58">
              <div class="flex items-center justify-between w-full">
                <div
                  v-show="recordState == ''"
                  class=""
                  @click="showFileOptions = !showFileOptions"
                >
                  <button
                    class="btn-message flex items-center justify-center p-1"
                  >
                    <svg
                      class="h-full w-full"
                      color="#6b6b6b"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div v-show="recordState == ''" class="flex-1">
                  <div class="flex items-center w-full">
                    <input
                      type="text"
                      class="
                        w-full
                        text-sm
                        py-2
                        px-3
                        bg-gray-lite-100
                        rounded-2xl
                        focus:outline-none
                      "
                      v-model="inputMessage"
                    />
                  </div>
                </div>
                <div
                  v-if="
                    recordState == 'recording' ||
                    recordState == 'stopped' ||
                    recordState == 'startRecording'
                  "
                  class="flex-1 flex items-center"
                >
                  <span
                    class="timer"
                    :class="{ 'w-1/2': recordState == 'recording' }"
                  >
                    {{ recordTimer.minutes + ":" + recordTimer.seconds }}</span
                  >
                  <span
                    v-show="
                      recordState == 'recording' ||
                      recordState == 'startRecording'
                    "
                    class="timer-circle bg-red-400"
                    :class="{
                      'bounce-animation':
                        recordState == 'recording' ||
                        recordState == 'startRecording',
                    }"
                  ></span>
                  <div v-show="recordState == 'stopped'" class="flex-1">
                    <audio
                      class="audio_player"
                      :src="audioTest"
                      controls="controls"
                      autobuffer="autobuffer"
                    ></audio>
                  </div>
                </div>
                <div v-if="recordState == 'toSend'" class="flex-1">toSend</div>
                <div class="flex items-center mr-1 justify-center">
                  <button
                    v-show="inputMessage.length > 0"
                    @click="emitMessage"
                    class="btn-message flex items-center justify-center p-1"
                  >
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26px"
                      height="26px"
                      viewBox="0 0 32.000000 32.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                        fill="#6b6b6b"
                        stroke="none"
                      >
                        <path
                          d="M0 245 c0 -60 -6 -57 128 -71 34 -4 62 -10 62 -14 0 -4 -28 -10 -62
                                    -14 -134 -14 -128 -11 -128 -71 l0 -53 155 66 c85 37 155 69 155 72 0 3 -70
                                    35 -155 72 l-155 66 0 -53z"
                        />
                      </g>
                    </svg>
                  </button>
                  <button
                    v-show="
                      inputMessage.length == 0 &&
                      (recordState == '' || recordState == 'startRecording')
                    "
                    @click="record()"
                    @mousedown="startRecord()"
                    @mouseup="testRecord()"
                    class="btn-message flex items-center justify-center p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="svg-record h-full w-full"
                      color="#6b6b6b"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                  <button
                    v-show="
                      inputMessage.length == 0 && recordState == 'recording'
                    "
                    @click="stopRecord()"
                    class="
                      btn-message
                      bg-red-400
                      flex
                      items-center
                      justify-center
                      p-1
                    "
                  >
                    <span
                      class="bg-white mr-1"
                      style="width: 4px; height: 14px"
                    ></span>
                    <span
                      class="bg-white mr-1"
                      style="width: 4px; height: 14px"
                    ></span>
                  </button>
                  <button
                    v-show="
                      inputMessage.length == 0 && recordState == 'stopped'
                    "
                    @click="continueRecord()"
                    class="
                      btn-message
                      bg-red-400
                      flex
                      items-center
                      justify-center
                      p-1
                    "
                  >
                    <span
                      class="bg-white rounded-3xl"
                      style="width: 14px; height: 14px"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </main>
</template>
<script>
const recordAudio = () => {
  return new Promise((resolve) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      var audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      const start = () => {
        mediaRecorder.start();
      };
      const stop = () => {
        return new Promise((resolve) => {
          mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audioChunks = [];
            const play = () => {
              audio.play();
            };
            resolve({ audioBlob, audioUrl, audio, play });
          });
          mediaRecorder.stop();
        });
      };

      resolve({ start, stop });
    });
  });
};
export default {
  data() {
    return {
      contacts: [],
      contactsLoaded: false,
      conversations: [],
      showSearch: "",
      contactsTab: "all",
      currentUser: null,
      currentContact: null,
      currentConversation: [],
      contactsSearchKey: "",
      messagesSearchKey: "",
      inputMessage: "",
      isMobile: false,
      showInMobile: false,
      socket: null,
      isGetUser: false,
      recordState: "",
      recorder: null,
      intervalTime: null,
      audioLength: 0,
      audio: null,
      audioTest: null,
      recordTimer: {
        minutes: "00",
        seconds: "00",
      },
      showFileOptions: false,
      fileOptions: [
        { name: "Document", ico: "", action: "document" },
        { name: "Camera", ico: "", action: "camera" },
        { name: "Audio", ico: "", action: "audio" },
        { name: "Location", ico: "", action: "location" },
        { name: "Contact", ico: "", action: "contact" },
      ],
      userID: null,
    };
  },
  async mounted() {
    this.userID = window.localStorage.getItem("userID");
    let receiver = window.localStorage.getItem("receiverID");
    this.contacts = [
      {
        id: receiver,
        username: "User name",
        profileImg:
          "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
        lastMessage: {},
        lastSeen: "online",
        conversation: {},
        unreadMessagesCount: 8,
      },
    ];
    this.isMobile = window.innerWidth < 640;
    window.addEventListener("resize", (e) => {
      this.reportWindowSize(e);
    });
    this.currentUser = this.$store.state.currentUser;
  },
  watch: {
  },
  methods: {
    openChat(id) {
      let contact = this.contacts.filter((ele) => ele.id == id);
      this.currentContact = contact[0];
      this.currentContact.unreadMessagesCount = 0;
      this.showInMobile = true;
      this.socket.emit("messagesState", {
        membersID: [this.userID, this.currentContact.id],
        receiversID: [this.currentContact.id],
        token: "AZE",
        state: "seen",
      });
      if (document.getElementById("messages-scroll-box") !== null) {
          let scrollBox = document.getElementById("messages-scroll-box");
          scrollBox.scrollTop = scrollBox.scrollHeight + 500;
        }
    },
    reportWindowSize(e) {
      this.isMobile = window.innerWidth < 640;
    },
    // record
    async record() {
      return;
      console.log("record");
      this.$emit("record");
      try {
        switch (this.recordState) {
          case "start": {
            this.recordState = "send";
            this.recorder = await recordAudio();
            await this.recorder.start();
            this.bounceAnimation = true;
            // document.querySelector('#d-record-svg').style.fill="#FFF"
            // document.querySelector('#d-record-button').classList.add("record-animation")
            var start = new Date().getTime();
            this.intervalTime = setInterval(() => {
              let distance = new Date().getTime() - start;
              let minutes = Math.floor(distance / (1000 * 60));
              let seconds = Math.floor(distance / 1000 - minutes * 60);
              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;
              this.recordTimer = { minutes: minutes, seconds: seconds };
            }, 1000);
            break;
          }
          case "send": {
            this.bounceAnimation = false;
            this.recordState = "start";
            clearInterval(this.intervalTime);
            this.recordTimer.minutes = "00";
            this.recordTimer.seconds = "00";
            const audio = await this.recorder.stop();
            console.log("recorded");
            this.audio = await this.audioToBase64(audio.audioBlob);
            this.sendMessage("audio");
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async startRecord() {
      try {
        console.log("start record");
        // this.recordedon=false
        // this.bounceAnimation=true
        // this.recordAnimation=true
        this.recordState = "startRecording";
        this.recorder = await recordAudio();
        await this.recorder.start();
        // let start = new Date().getTime();
        this.intervalTime = setInterval(() => {
          // this.audioLength = (new Date().getTime() - start )
          this.audioLength += 1000;
          let minutes = Math.floor(this.audioLength / (1000 * 60));
          let seconds = Math.floor(this.audioLength / 1000 - minutes * 60);
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          this.recordTimer = { minutes: minutes, seconds: seconds };
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
    async testRecord() {
      try {
        // this.recordState="recording"
        console.log("test record");
        if (this.audioLength < 1000) {
          console.log("too short");
          clearInterval(this.intervalTime);
          this.recordState = "";
          this.audio = null;
          this.recordTimer.minutes = "00";
          this.recordTimer.seconds = "00";
        } else {
          this.recordState = "recording";
        }
      } catch (error) {
        console.log("error : ", error);
        clearInterval(this.intervalTime);
        this.recordState = "";
        this.recorder = null;
        this.audio = null;
        this.audioLength = 0;
        this.recordTimer.minutes = "00";
        this.recordTimer.seconds = "00";
      }
    },
    async stopRecord() {
      clearInterval(this.intervalTime);
      const audio = await this.recorder.stop();
      this.audioTest = await this.audioToBase64(audio.audioBlob);
      console.log(this.audioTest);
      this.recordState = "stopped";
    },
    async continueRecord() {
      this.recordState = "recording";
      await this.recorder.start();
      this.intervalTime = setInterval(() => {
        this.audioLength += 1000;
        let minutes = Math.floor(this.audioLength / (1000 * 60));
        let seconds = Math.floor(this.audioLength / 1000 - minutes * 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.recordTimer = { minutes: minutes, seconds: seconds };
      }, 1000);
    },
    // async stopRecord(){
    //   try {
    //       console.log('stop record');
    //       this.$emit('testRecord')
    //       clearInterval(this.intervalTime)
    //       if(this.audioLength<1000){
    //           console.log('too short');
    //           this.recordState=""
    //           this.audio = null
    //           this.recordTimer.minutes='00'
    //           this.recordTimer.seconds='00'
    //       }else{
    //           const audio = await this.recorder.stop();
    //           this.audio = await this.audioToBase64(audio.audioBlob)
    //           this.recordState="toSend"
    //           console.log('waiting to send ipp');
    //       }
    //       this.recorder = null
    //       this.audioLength=0
    //     } catch (error) {
    //         console.log('error : ',error);
    //         clearInterval(this.intervalTime)
    //         this.recordState="start"
    //         this.recorder = null
    //         this.audio = null
    //         this.audioLength=0
    //         this.recordTimer.minutes='00'
    //         this.recordTimer.seconds='00'
    //     }
    // },
    async sendAudio() {
      try {
        this.recordState = "start";
        clearInterval(this.intervalTime);
        this.recordTimer.minutes = "00";
        this.recordTimer.seconds = "00";
        this.sendMessage("audio");
        this.toSend = false;
      } catch (error) {
        console.log(error);
      }
    },
    async removeRecord() {
      try {
        clearInterval(this.intervalTime);
        this.recordTimer.minutes = "00";
        this.recordTimer.seconds = "00";
        this.recorder = null;
        this.toSend = false;
        if (this.isMobile) {
          document.querySelector("#m-record-svg").style.fill = "#4F5458";
          document
            .querySelector("#m-record-button")
            .classList.remove("record-animation");
        } else {
          document.querySelector("#d-record-svg").style.fill = "#4F5458";
          document
            .querySelector("#d-record-button")
            .classList.remove("record-animation");
        }

        this.audio = null;
        this.recordState = "start";
      } catch (error) {
        console.log(error);
      }
    },
    audioToBase64(blob) {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    },
    // file
    fileAction(action) {
      switch (action) {
        case "gallery": {
          break;
        }
      }
    },
    uploadImages(e) {},
    getSvg(name) {
      switch (name) {
        case "document": {
          return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>`;
        }
        case "camera": {
          return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>`;
        }
        case "location": {
          return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>`;
        }
        case "audio": {
          return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>`;
        }
        case "contact": {
          return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>`;
        }
        case "gallery": {
          return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>`;
        }
      }
    },
  },
};
</script>
<style>
body {
  overflow-y: hidden;
}
.svg-record {
  /* color: ""; */
}
.bg-color {
  background: #f0f2f5;
}
::-webkit-scrollbar {
  width: 5px;
}
.contacts-area {
  background: #f6f9fb;
}
.messages-area {
  background: #f1f3f9;
}
.profile-img {
  width: 38px;
  height: 38px;
  margin: 1px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-img img {
  border-radius: 50%;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.profile-img .account-status {
  position: absolute;
  right: 0;
  bottom: 3px;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  /* background: #28C76F; */
}
.messages-count {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(43 72 76);
  height: 22px;
  width: 22px;
  border-radius: 20px;
  font-size: 12.4px;
  line-height: 13px;
  font-weight: 600;
  background: #fffc00;
  text-align: center;
}
.h-58 {
  height: 58px;
}
.messages-box {
  /* background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilQM1UUAuGkQO0lWw1X2IdPxVXp78g5uNfQ&usqp=CAU'); */
  max-width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btn-message {
  height: 34px;
  width: 34px;
  border-radius: 50%;
  margin: 0 4px;
}
/* .btn-message:hover{
    background: #fdfdfd;
} */

/* record */

.timer {
  font-size: 14px;
  color: rgb(118 118 118);
  padding: 0 5px;
  font-weight: 500;
}
.timer-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
}
.bounce-animation {
  /* animation: record-bounce 1.2s ease infinite; */
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.bottom-in-animate {
  animation: bottom-in-animate 0.2s linear;
}
.bottom-out-animate {
  animation: bottom-out-animate 0.2s linear;
}
@keyframes pulse {
  0% {
    box-shadow: 0px 0px 2px 0px rgba(173, 0, 0, 0.3);
  }
  65% {
    box-shadow: 0px 0px 5px 7px rgba(173, 0, 0, 0.3);
  }
  90% {
    box-shadow: 0px 0px 5px 4px rgba(173, 0, 0, 0);
  }
}
@keyframes record-bounce {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  25% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(0.7);
    opacity: 0;
  }
  75% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes bottom-in-animate {
  from {
    bottom: -40px;
    opacity: 0;
  }
  to {
    bottom: 4px;
    opacity: 1;
  }
}
@keyframes bottom-out-animate {
  from {
    bottom: 4px;
    opacity: 1;
  }
  to {
    bottom: -40px;
    opacity: 0;
  }
}
/*  */
@media (max-width: 640px) {
  .contacts-area {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
}
/* .op-file:hover span:first-child{
    background: #374151;
}
/*  */
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.61, 1.17, 0.85, 0.95);
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.61, 1.17, 0.65, 0.95);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translate(100%, 0);
  opacity: 0;
}
*/
/*   */
.tab-slide-fade-leave-active,
.tab-slide-fade-enter-active {
  transition: 0.4s;
  opacity: 0;
}
.tab-slide-fade-enter {
  transform: translate(100%, 0);
}
.tab-slide-fade-leave-to {
  transform: translate(-100%, 0);
}

.slide-fade-right-enter-active {
  transform: translate(-100%, 0);
  transition: all 0.2s cubic-bezier(0.58, 1.04, 0.73, 0.97);
}
.slide-fade-right-enter,
.slide-fade-left-enter {
  opacity: 1;
}
.slide-fade-right-enter-to,
.slide-fade-left-enter-to {
  opacity: 1;
}
.slide-fade-right-leave,
.slide-fade-left-leave {
  opacity: 1;
}
.slide-fade-right-leave-to,
.slide-fade-left-leave-to {
  opacity: 1;
}
.slide-fade-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.58, 1.04, 0.73, 0.97);
}

.slide-fade-left-enter-active {
  transform: translateX(100%);
  opacity: 1;
  transition: all 0.2s cubic-bezier(0.58, 1.04, 0.73, 0.97);
}
.slide-fade-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.58, 1.04, 0.73, 0.97);
}
/*  */

.slide-fade-enter-active {
  opacity: 0.7;
  transition: all 0.4s cubic-bezier(0.79, 0.13, 0.07, 0.93);
}
.slide-fade-leave-active {
  opacity: 0.7;
  transition: all 0.4s cubic-bezier(0.79, 0.13, 0.07, 0.93);
}
.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
