<template>
  <main class=" d-flex justify-content-center align-items-center position-relative p-6">
    <!--begin::Chat drawer-->
 <div class="position-relative standard-height standard-width ">
       <div
      id="kt_drawer_chat"
      class="
        bg-body
        rounded
        body
        d-flex
        position-absolute
        top-0
        sm:top-6
        right-0
        bottom-0
        sm:bottom-6
        left-0
        shadow
        bg-color
      "
    >
      <div class="bg-gray-100 px-4 asside-box scroll-auto
        py-4">
        <!--begin::Basic info-->
        <div class="card bg-transparent scroll-auto">
          <!--begin::Card header-->
          <div
            class=" border-0 py-2 cursor-pointer"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#kt_account_profile_details"
            aria-expanded="true"
            aria-controls="kt_account_profile_details"
          >
            <!--begin::Card title-->
              <h3 class="fw-bolder m-0">Configurations</h3>
            <!--end::Card title-->
          </div>
          <!--begin::Card header-->
          <!--begin::Content-->
          <div id="kt_account_settings_profile_details" class="collapse show">
            <!--begin::Form-->
            <form id="kt_account_profile_details_form" class="form">
              <!--begin::Card body-->
              <div class="card-body px-5 py-3">
                <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Label-->
                  <label class="col-lg-4 col-form-label required fw-bold fs-6"
                    >Data Set</label
                  >
                  <!--end::Label-->
                  <!--begin::Col-->
                  <div class="col-lg-8 fv-row">
                    <select
                     v-model="form.dataset"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-placeholder="Select a timezone.."
                      class="form-select form-select-solid bg-white form-select-lg"
                    >
                      <option
                        v-for="(item, index) in datasets" :key="index"
                        :value="item.value"
                      >
                       {{item.name}}
                      </option>
                    </select>
                  </div>
                  <!--end::Col-->
                </div>
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Label-->
                  <label class="col-lg-4 col-form-label required fw-bold fs-6"
                    >Personality Models</label
                  >
                  <!--end::Label-->
                  <!--begin::Col-->
                  <div class="col-lg-8 fv-row">
                    <select
                     v-model="form.personality"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-placeholder="Select a timezone.."
                      class="form-select form-select-solid bg-white form-select-lg"
                    >
                      <option
                        v-for="(item, index) in personalityModels" :key="index"
                        :value="item.value"
                      >
                       {{item.name}}
                      </option>
                    </select>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
                              <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Label-->
                  <label class="col-lg-4 col-form-label required fw-bold fs-6"
                    >Personality Types</label
                  >
                  <!--end::Label-->
                  <!--begin::Col-->
                  <div class="col-lg-8 fv-row">
                    <select
                     v-model="form.type"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-placeholder="Select a timezone.."
                      class="form-select form-select-solid bg-white form-select-lg"
                    >
                      <option
                        v-for="(item, index) in personalityTypes" :key="index"
                        :value="item.value"
                      >
                       {{item.name}}
                      </option>
                    </select>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
                  <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Label-->
                  <label class="col-lg-4 col-form-label required fw-bold fs-6"
                    >NLU Models</label
                  >
                  <!--end::Label-->
                  <!--begin::Col-->
                  <div class="col-lg-8 fv-row">
                    <select
                     v-model="form.NLUModel"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-placeholder="Select a timezone.."
                      class="form-select form-select-solid bg-white form-select-lg"
                    >
                      <option
                        v-for="(item, index) in NLUModels" :key="index"
                        :value="item.value"
                      >
                       {{item.name}}
                      </option>
                    </select>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Col-->
                  <div class="w-100 fv-row">
                    <textarea
                      v-model="result.NLUModel"
                      rows="3"
                      class="form-control form-control-lg form-control-solid bg-white"
                      placeholder="Waiting for result"
                      value="Keenthemes"
                    ></textarea>
                  </div>
                  <!--end::Col-->
                </div>
                <hr>
                <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Label-->
                  <label class="col-lg-4 col-form-label required fw-bold fs-6"
                    >DST Models</label
                  >
                  <!--end::Label-->
                  <!--begin::Col-->
                  <div class="col-lg-8 fv-row">
                    <select
                     v-model="form.DSTModel"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-placeholder="Select a timezone.."
                      class="form-select form-select-solid bg-white form-select-lg"
                    >
                      <option
                        v-for="(item, index) in DSTModels" :key="index"
                        :value="item.value"
                      >
                       {{item.name}}
                      </option>
                    </select>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Col-->
                  <div class="w-100 fv-row">
                    <textarea
                      v-model="result.DSTModel"
                      rows="3"
                      class="form-control form-control-lg form-control-solid bg-white"
                      placeholder="Waiting for result"
                      value="Keenthemes"
                    ></textarea>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
                                <hr>
                <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Label-->
                  <label class="col-lg-4 col-form-label required fw-bold fs-6"
                    >Policy Models</label
                  >
                  <!--end::Label-->
                  <!--begin::Col-->
                  <div class="col-lg-8 fv-row">
                    <select
                     v-model="form.PolicyModel"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-placeholder="Select a timezone.."
                      class="form-select form-select-solid bg-white form-select-lg"
                    >
                      <option
                        v-for="(item, index) in PolicyModels" :key="index"
                        :value="item.value"
                      >
                       {{item.name}}
                      </option>
                    </select>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Col-->
                  <div class="w-100 fv-row">
                    <textarea
                      v-model="result.PolicyModel"
                      rows="3"
                      class="form-control form-control-lg form-control-solid bg-white"
                      placeholder="Waiting for result"
                      value="Keenthemes"
                    ></textarea>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
                                <hr>
                <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Label-->
                  <label class="col-lg-4 col-form-label required fw-bold fs-6"
                    >NLG Models</label
                  >
                  <!--end::Label-->
                  <!--begin::Col-->
                  <div class="col-lg-8 fv-row">
                    <select
                     v-model="form.NLGModel"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-placeholder="Select a timezone.."
                      class="form-select form-select-solid bg-white form-select-lg"
                    >
                      <option
                        v-for="(item, index) in NLGModels" :key="index"
                        :value="item.value"
                      >
                       {{item.name}}
                      </option>
                    </select>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
               <!--begin::Input group-->
                <div class="row mb-4">
                  <!--begin::Col-->
                  <div class="w-100 fv-row">
                    <textarea
                      v-model="result.NLGModel"
                      rows="3"
                      class="form-control form-control-lg form-control-solid bg-white"
                      placeholder="Waiting for result"
                      value="Keenthemes"
                    ></textarea>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
              </div>
              <!--end::Card body-->
              <!--begin::Actions-->
              <div class="card-footer d-flex justify-content-end py-1 px-9">
                <button
                  type="reset"
                  class="btn btn-secondary btn-active-light-primary me-2"
                  @click="discard"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  class="btn btn-success btn-active-light-success"
                  @click="submit"
                >
                  Save Changes
                </button>
              </div>
              <!--end::Actions-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Content-->
        </div>
        <!--end::Basic info-->
      </div>
      <!--begin::Messenger-->
      <div class="card w-100 rounded-0 border-0         px-4
        pb-4" id="kt_drawer_chat_messenger">
        <!--begin::Card header-->
        <div class="card-header px-2" id="kt_drawer_chat_messenger_header">
          <!--begin::Title-->
          <div class="card-title py-3">
            <!--begin::User-->
                                 <div
                    class="symbol symbol-35px symbol-circle me-2"
                  >
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
                class="btn btn-sm btn-icon btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i class="bi bi-three-dots fs-3"></i>
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
            class="scroll-auto me-n5 pe-5"
            style="height: calc(100vh - 320px)"
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
              class="d-flex mb-10"
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
                    <a
                      href="#"
                      :class="
                        message.owner == 'agent'
                          ? 'text-gray-900 text-hover-primary'
                          : 'text-gray-900 text-hover-primary'
                      "
                      class="fs-5 fw-bolder me-1"
                      >{{ message.ownername }}</a
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
                  class="p-5 rounded fw-bold w-100 pb-1 mw-lg-400px"
                  data-kt-element="message-text"
                >
                  {{ message.message }}
                  <br />
                  <div
                    class="w-100 text-muted fs-7"
                    :class="
                      message.owner == 'agent' ? 'text-end' : 'text-start'
                    "
                  >
                    {{ $moment(message.messagetime).fromNow() }}
                  </div>
                </div>
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
        <div class="card-footer py-2 px-3" id="kt_drawer_chat_messenger_footer">
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
      messages: [
        {
          owner: "agent",
          ownername: "Agent",
          messagetime: 1655127322753,
          message: "Hey! can i help you ",
        },
        {
          owner: "test",
          ownername: "Brian Cox",
          messagetime: 1655127826753,
          message:
            "Right before vacation season we have the next Big Deal for you.",
        },
      ],
      newMessage: "",
      form:{
         dataset:'data1',
         personality : 'model1',
         type:'type1',
         NLUModel:'model1'
      },
      result:{
         NLUModel:'',
         DSTModel:'',
         PolicyModel:'',
         NLGModel:'',
      },
      datasets:[
         {name:"data1",value:"data2"},
         {name:"data2",value:"data2"},
      ],
      personalityModels:[
         {name:"model1",value:"model2"},
         {name:"model2",value:"model2"},
      ],
      personalityTypes:[
         {name:"type1",value:"type2"},
         {name:"type2",value:"type2"},
      ],
      NLUModels:[
         {name:"model1",value:"model2"},
         {name:"model2",value:"model2"},
      ],
      DSTModels:[
         {name:"model1",value:"model2"},
         {name:"model2",value:"model2"},
      ],   
      PolicyModels:[
         {name:"model1",value:"model2"},
         {name:"model2",value:"model2"},
      ],      
      NLGModels:[
         {name:"model1",value:"model2"},
         {name:"model2",value:"model2"},
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
    submit(){

    },
    discard(){

    },
    send() {
      if (this.newMessage.length > 0) {
        let message = {
          owner: "tAourraest",
          ownername: "Aourra",
          messagetime: Date.now(),
          message: this.newMessage,
        };
        this.messages.push(message);
        this.newMessage = "";
      }
    },
  },
};
</script>

<style scoped>
.standard-height {
  min-height: calc(100vh - 100px);
}
.standard-width {
  width: 90vw;
}
.body {
  display: flex;
}
.body .asside-box {
  width: 45%;
}
.body .messages-box {
  flex: 1;
  background: red;
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
</style>
