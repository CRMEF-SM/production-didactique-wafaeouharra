<template>
  <header
    class="
      top-0
      flex
      align-items-center
      justify-content-center
      z-20
      bg-white
      shadow
      p-2
      header-color header
      align-items-stretch
    "
  >
    <div
      class="
        py-2
        w-100
        h-100
        px-2
        standard-width
        flex
        align-items-center
        justify-content-between
      "
    >
      <div class="d-flex  align-items-center">
        <div class="logo-container d-flex">
            <img
              class="chat-logo"
              width="48px"
              height="48px"
              src="~/assets/media/icon2.png"
              alt=""
            />
        </div>
        <h3 class="m-0 fs-1 mt-1">
          Educatif Chatbot
        </h3>

      </div>
      <div class="d-flex align-items-center justify-content-end">
        <span @click="showOptions=!showOptions">
          <svg
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </span>
        <div class="" v-show="showOptions">

        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showOptions:false,
    };
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
header {
  height: 60px;
}
.logo-container{
    border-radius: 50%;
    cursor: pointer;
}
.chat-logo{
    object-fit: cover;
    border-radius: 50%;
}
.chat-logo:hover{
    transform: rotate(360deg);
    transition: all .8s ease;
}
</style>
