<template>
  <button
    class="w-10 h-5 bg-gray-500 dark:bg-gray-400  rounded-full right-20 absolute flex flex-row items-center  "
    @click="THEME()"
  >
    <div class="relative w-full h-full flex items-center">
      <div
        class="block w-7 h-7 overflow-visible bg-white dark:bg-gray-800 rounded-full  -right-2 dark:-left-2 absolute"
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
