<template>
  <div class="flex items-center">
    <button @click="LOGIN_MENU()" class=" absolute right-5 ">
      <img
        src="https://images.generated.photos/YTwWjnwcu4_bTXOyoCdp8Mr-NY64WEKtLsbUOqrFW-8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI2NzM5LmpwZw.jpg"
        alt=""
        class="h-10 rounded-full"
      />
    </button>
    <div
      v-if="GET_LOGIN_MENU"
      class="w-40 h-24 bg-white dark:bg-gray-800 dark:border-none absolute right-8 top-14 border-1 rounded-sm shadow-md flex flex-col"
    >
      <div class="h-16 inline-flex  mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-1 mt-1 text-gray-800 dark:text-white "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="flex flex-col pl-1">
          <h1 class="text-gray-400 dark:text-gray-200">My Profile</h1>
          <p class="text-gray-500 dark:text-gray-400 text-xs">
            Change settings of your account
          </p>
        </div>
      </div>
      <button
        class="text-red-500 dark:text-red-400 text-semibold text-md border-t-1 inline-flex items-center pl-1 dark:border-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </svg>
        <p class="pl-1">Logout</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginCorner",
  methods: {
    ...mapActions(["LOGIN_MENU"]),
  },
  computed: {
    ...mapGetters(["GET_LOGIN_MENU"]),
  },
};
</script>
