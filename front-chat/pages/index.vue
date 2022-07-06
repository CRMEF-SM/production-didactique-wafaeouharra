<template>
  <main
    class="
      d-flex
      justify-content-center
      align-items-center
      position-relative
      p-6
    "
  >
    <!--begin::Chat drawer-->
    <div class="position-relative standard-height standard-width">
      <div
        @click="hide = false"
        v-if="extensible && hide"
        class="logo-container position-fixed"
        style="bottom: 15px; right: 15px"
      >
        <img
          class="chat-logo"
          width="48px"
          height="48px"
          src="~/assets/media/icon2.png"
          alt=""
        />
      </div>
      <div
        v-if="!hide"
        id="kt_drawer_chat"
        :class="
          extensible
            ? 'extention'
            : 'position-absolute top-0 sm:top-6  right-0 bottom-0 sm:bottom-6 left-0'
        "
        class="bg-body rounded body d-flex shadow bg-color"
      >
        <!--begin::Messenger-->
        <div
          class="card rounded shadow border-0 px-4"
          :class="extensible ? 'w-350px' : 'w-100'"
          id="kt_drawer_chat_messenger"
        >
          <!--begin::Card header-->
          <div class="card-header px-2" id="kt_drawer_chat_messenger_header">
            <!--begin::Title-->
            <div class="card-title py-3">
              <!--begin::User-->
              <div class="symbol symbol-35px symbol-circle me-2">
                <img
                  alt="Pic"
                  src="https://img.freepik.com/free-vector/robot-android-realistic-3d-composition-with-artificial-support-agent-cybernetic-anthropomorphous-machine-with-feminine-apperance_1284-28638.jpg?w=2000"
                />
              </div>
              <div class="d-flex justify-content-center flex-column me-3">
                <span
                  class="
                    fs-4
                    fw-bolder
                    text-gray-900 text-hover-primary
                    me-1
                    lh-1
                  "
                  >Ask me</span
                >
                <!--begin::Info-->
                <div class="mb-0 lh-1">
                  <span
                    class="badge badge-success badge-circle w-10px h-10px me-1"
                  ></span>
                  <span class="fs-7 fw-bold text-muted">Active</span>
                </div>
                <!--end::Info-->
              </div>
              <!--end::User-->
            </div>
            <!--end::Title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <!--begin::Menu-->
              <div class="me-2">
                <button
                  @click="extensible = !extensible"
                  class="btn btn-sm btn-icon btn-active-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <span class="svg-icon svg-icon-2">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </button>
                <!--begin::Menu 3-->
                <div
                  class="
                    menu
                    menu-sub
                    menu-sub-dropdown
                    menu-column
                    menu-rounded
                    menu-gray-800
                    menu-state-bg-light-primary
                    fw-bold
                    w-200px
                    py-3
                  "
                  data-kt-menu="true"
                >
                  <!--begin::Heading-->
                  <div class="menu-item px-3">
                    <div
                      class="
                        menu-content
                        text-muted
                        pb-2
                        px-3
                        fs-7
                        text-uppercase
                      "
                    >
                      Contacts
                    </div>
                  </div>
                  <!--end::Heading-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a
                      href="#"
                      class="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_users_search"
                      >Add Contact</a
                    >
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a
                      href="#"
                      class="menu-link flex-stack px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_invite_friends"
                      >Invite Contacts
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Specify a contact email to send an invitation"
                      ></i
                    ></a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div
                    class="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    <a href="#" class="menu-link px-3">
                      <span class="menu-title">Groups</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <!--begin::Menu sub-->
                    <div class="menu-sub menu-sub-dropdown w-175px py-4">
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a
                          href="#"
                          class="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                          >Create Group</a
                        >
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a
                          href="#"
                          class="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                          >Invite Members</a
                        >
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a
                          href="#"
                          class="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                          >Settings</a
                        >
                      </div>
                      <!--end::Menu item-->
                    </div>
                    <!--end::Menu sub-->
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3 my-1">
                    <a
                      href="#"
                      class="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                      >Settings</a
                    >
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu 3-->
              </div>
              <!--end::Menu-->
              <!--begin::Close-->
              <div
                v-if="extensible"
                @click="hide = !hide"
                class="btn btn-sm btn-icon btn-active-light-primary"
                id="kt_drawer_chat_close"
              >
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                <span class="svg-icon svg-icon-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="currentColor"
                    />
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Close-->
            </div>
            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body" id="kt_drawer_chat_messenger_body">
            <!--begin::Messages-->
            <div
              id="messages-box"
              class="scroll-auto me-n5 pe-5"
              style="height: calc(100vh - 284px)"
            >
              <!--begin::Message(in)-->
              <div
                v-for="(message, index) in messages"
                :key="index"
                :class="
                  message.owner == 'agent'
                    ? 'justify-content-start'
                    : 'justify-content-end'
                "
                class="d-flex mb-2"
              >
                <!--begin::Wrapper-->
                <div
                  :class="
                    message.owner == 'agent'
                      ? 'align-items-start'
                      : 'align-items-end'
                  "
                  class="d-flex flex-column m-width-70"
                >
                  <!--begin::User-->
                  <div class="d-flex align-items-center gap-2">
                    <!--begin::Avatar-->
                    <div
                      class="symbol symbol-35px symbol-circle"
                      :class="message.owner == 'agent' ? '' : 'order-1'"
                    >
                      <img
                        alt="Pic"
                        :src="
                          message.owner == 'agent'
                            ? 'https://img.freepik.com/free-vector/robot-android-realistic-3d-composition-with-artificial-support-agent-cybernetic-anthropomorphous-machine-with-feminine-apperance_1284-28638.jpg?w=2000'
                            : 'https://preview.keenthemes.com/ceres-html-pro/assets/media/avatars/300-1.jpg'
                        "
                      />
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Details-->
                    <div class="">
                      <span
                        class="
                          fs-5
                          fw-bolder
                          text-gray-900 text-hover-primary
                          me-1
                        "
                        >{{ message.ownername }}</span
                      >
                    </div>
                    <!--end::Details-->
                  </div>
                  <!--end::User-->
                  <!--begin::Text-->
                  <div
                    :class="
                      message.owner == 'agent'
                        ? 'bg-light-info text-dark  text-start'
                        : 'bg-light-primary text-dark text-end'
                    "
                    class="
                      p-5
                      position-relative
                      rounded
                      fw-bold
                      w-100
                      pb-1
                      mw-lg-400px
                    "
                    data-kt-element="message-text"
                  >
                    <div
                      v-show="shownClass.includes(index)"
                      v-if="message.owner == 'agent'"
                      class="bg-gray-100 px-2 py-1 rounded position-absolute"
                      style="bottom: calc(100% + 5px); right: -50px"
                    >
                      <div
                        class="d-flex align-item-center gap-3"
                        v-for="(item, ind) in message.class"
                        :key="ind"
                      >
                        <div class="fs-7">
                          Class :
                          <span>{{ item.intent }}</span>
                        </div>
                        -
                        <div class="fs-7">
                          Probability :
                          <span
                            class="fs-7"
                            :class="
                              item.probability * 100 > 90
                                ? 'text-success'
                                : item.probability * 100 > 80
                                ? 'text-primary'
                                : 'text-warning'
                            "
                            >{{
                              (item.probability * 100)
                                .toString()
                                .substring(0, 4)
                            }}
                            %</span
                          >
                        </div>
                      </div>
                    </div>
                    <button
                      title="show details"
                      class="
                        p-0
                        btn btn-light-secondary btn-active-light-primary
                        position-absolute
                      "
                      style="top: 2px; right: 2px"
                      v-if="message.owner == 'agent'"
                      @click="checkShow(index)"
                    >
                      <span class="svg-icon svg-icon-2 m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </button>
                    {{ message.message }}
                    <br />
                    <div
                      class="w-100 text-muted fs-7"
                      :class="
                        message.owner == 'agent' ? 'text-end' : 'text-start'
                      "
                    >
                      <span> {{ $moment(message.messagetime).fromNow() }}</span>
                    </div>
                  </div>
                  <br />
                  <!--end::Text-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Message(in)-->
            </div>
            <!--end::Messages-->
          </div>
          <!--end::Card body-->
          <!--begin::Card footer-->
          <div
            class="card-footer py-3 px-3"
            id="kt_drawer_chat_messenger_footer"
          >
            <!--begin::Input-->
            <!--end::Input-->
            <!--begin:Toolbar-->
            <div class="d-flex gap-2 flex-stack">
              <!--begin::Actions-->
              <div v-if="false" class="d-flex align-items-center me-2">
                <button
                  class="btn btn-sm btn-icon btn-active-light-primary me-1"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Coming soon"
                >
                  <i class="bi bi-paperclip fs-3"></i>
                </button>
                <button
                  class="btn btn-sm btn-icon btn-active-light-primary me-1"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Coming soon"
                >
                  <i class="bi bi-upload fs-3"></i>
                </button>
              </div>
              <textarea
                class="form-control form-control-solid form-control-solid-bg"
                rows="1"
                v-model="newMessage"
                placeholder="Type a message"
              ></textarea>
              <!--end::Actions-->
              <!--begin::Send-->
              <button
                v-if="loading"
                class="
                  button--loading
                  btn-send btn btn-sm btn-icon btn-active-light-primary
                  p-2
                  position-relative
                "
              ></button>
              <button
                v-else
                class="
                  btn btn-sm btn-icon btn-active-light-primary
                  p-2
                  btn-send
                  d-flex
                  align-items-center
                  justify-content-center
                "
                type="button"
                @click="send"
              >
                <span class="svg-icon svg-icon-1">
                  <svg viewBox="0 0 24 24" width="25" height="25" class="">
                    <path
                      fill="currentColor"
                      d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                    ></path>
                  </svg>
                </span>
              </button>
              <!--end::Send-->
            </div>
            <!--end::Toolbar-->
          </div>
          <!--end::Card footer-->
        </div>
        <!--end::Messenger-->
      </div>
    </div>
    <!--end::Chat drawer-->
  </main>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: this.$store.state.baseUrl,
      shownClass: [],
      extensible: false,
      hide: false,

      loading: false,
      messages: [
        {
          owner: "agent",
          ownername: "Agent",
          messagetime: 1655127322753,
          message: "Hey! can i help you ",
          class: [
            {
              intent: "greeting",
              probability: "1",
            },
          ],
        },
      ],
      newMessage: "",
      form: {
        dataset: "data1",
        personality: "model1",
        type: "type1",
        NLUModel: "model1",
      },
      result: {
        NLUModel: "",
        DSTModel: "",
        PolicyModel: "",
        NLGModel: "",
      },
      datasets: [
        { name: "data1", value: "data2" },
        { name: "data2", value: "data2" },
      ],
      personalityModels: [
        { name: "model1", value: "model2" },
        { name: "model2", value: "model2" },
      ],
      personalityTypes: [
        { name: "type1", value: "type2" },
        { name: "type2", value: "type2" },
      ],
      NLUModels: [
        { name: "model1", value: "model2" },
        { name: "model2", value: "model2" },
      ],
      DSTModels: [
        { name: "model1", value: "model2" },
        { name: "model2", value: "model2" },
      ],
      PolicyModels: [
        { name: "model1", value: "model2" },
        { name: "model2", value: "model2" },
      ],
      NLGModels: [
        { name: "model1", value: "model2" },
        { name: "model2", value: "model2" },
      ],
      validForm: {
        q1: 2,
        q2: 3,
        q3: 3,
        q4: 2,
      },
      form: {
        q1: [],
        q2: [],
        q3: [],
        q4: [],
      },
      score: 0,
      submited: false,
      result: false,
      currentColor: 1,
      currentColor: 1,
      cible: {
        index1: 3,
        index2: 4,
        geted1: 0,
        geted2: 0,
      },
      score: 0,
      actions: [],
    };
  },
  watch: {
    currentColor: function (val) {
      this.cible.geted1 = val == this.cible.index1 ? 1 : 0;
      this.score = this.cible.geted1 + this.cible.geted2;
    },
    currentColor: function (val) {
      this.cible.geted2 = val == this.cible.index2 ? 1 : 0;
      this.score = this.cible.geted1 + this.cible.geted2;
    },
    score: function (val) {
      if (val == 2) {
        this.result = true;
      }
    },
  },
  mounted() {
    //  this.init()
    //  document.addEventListener("keyup", (e) => {
    //    this.logKey(e);
    //  });
  },
  methods: {
    checkShow(index) {
      if (this.shownClass.includes(index)) {
        let ind = this.shownClass.indexOf(index);
        this.shownClass.splice(ind, 1);
      } else {
        this.shownClass.push(index);
      }
    },
    async submit() {},
    discard() {},
    async send() {
      if (this.newMessage.length > 0) {
        this.loading = true;
        try {
          let message = {
            owner: "tAourraest",
            ownername: "Aourra",
            messagetime: Date.now(),
            message: this.newMessage,
          };
          this.messages.push(message);
          this.scrollTop();
          let res = await this.$axios.post(
            "http://192.168.1.37:5000/get-response",
            {
              message: this.newMessage,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "mykey",
                "X-API-SECRET": "mysecretkey",
              },
            }
          );
          this.newMessage = "";
          let response = {
            owner: "agent",
            ownername: "Agent",
            messagetime: Date.now(),
            message: res.data.response.intent,
            class: res.data.response.class,
          };
          setTimeout(() => {
            this.messages.push(response);
            this.scrollTop();
            let audio = new Audio(
              " https://api.ask-us.co/assets/sounds/sent.mp3"
            );
            audio.play();
            this.loading = false;
          }, 500);
        } catch (error) {
          console.log(error);
        }
      }
    },
    scrollTop() {
      this.$nextTick(() => {
        var element = document.getElementById("messages-box");
        if (element) {
          element.scroll({
            top: parseInt(element.scrollHeight * 2),
            behavior: "smooth",
          });
        } else {
          setTimeout(() => {
            element = document.getElementById("messages-box");
            element.scroll({
              top: parseInt(element.scrollHeight * 2),
              behavior: "smooth",
            });
          }, 500);
        }
      });
    },
  },
};
</script>

<style scoped>
.standard-height {
  min-height: calc(100vh - 100px);
}
.standard-width {
  width: 70vw;
}
.body {
  display: flex;
}
.body .asside-box {
  width: 45%;
}
main {
  background-image: url("~assets/media/back.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.insit-0 {
  inset: 0;
}
.btn-send {
  background: #f4f8fa;
  height: 40px !important;
  width: 40px !important;
}
.scroll-auto {
  overflow-y: auto;
  overflow-x: hidden;
}
.m-width-70 {
  min-width: 70%;
}

/* extensible */

.extention {
  position: fixed !important;
  bottom: 10px !important;
  right: 10px !important;
}

/*  */
/* .button__text {
  font: bold 20px "Quicksand", san-serif;
  color: #ffffff;
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
} */

.button--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #3c4a4e;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
.logo-container {
  border-radius: 50%;
  cursor: pointer;
}
.chat-logo {
  object-fit: cover;
  border-radius: 50%;
}
.chat-logo:hover {
  transform: rotate(360deg);
  transition: all 0.8s ease;
}
</style>
