<template>
  <button
    class="w-10 h-4 bg-gray-800 dark:bg-blue-500  rounded-full right-20 absolute flex flex-row items-center  border-1 border-gray-500 dark:border-blue-900"
    @click="THEME()"
  >
    <div class="relative w-full h-full flex items-center">
      <div
        class="block w-7 h-7 overflow-visible bg-gray-400 dark:bg-blue-200 rounded-full  -right-2 dark:-left-2 absolute"
      ></div>
    </div>
  </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TogleButton",
  methods: {
    ...mapActions(["THEME"]),
    computed: {
      ...mapGetters(["GET_THEME"]),
    },
  },
};
</script>
