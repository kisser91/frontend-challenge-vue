<script>
import { mapGetters } from "vuex";
import NavBar from "../components/NavBar.vue";
import PieGraph from "../components/PieGraph.vue";
import Employees from "../components/Employees.vue";
export default {
  name: "Home",
  components: { NavBar, PieGraph, Employees },
  computed: {
    ...mapGetters(["GET_THEME"]),
  },
};
</script>

<template>
  <div class="bg-light h-full w-full dark:bg-gray-900 overflow-y-auto">
    <!-- CONTAINER -->
    <div class="p-0 md:p-5  flex flex-col space-y-8 text-md mb-5 md:mb-0">
      <!-- NAVBAR -->
      <NavBar />
      <!-- NAVIGATION -->
      <h1 class=" ml-2 md:ml-5 navigation-text">
        Home /
        <span class=" underline"> Reports & Insights </span>
      </h1>
      <!-- BODY -->
      <div
        class=" grid grid-cols-1 md:grid-cols-8 gap-5 lg:gap-7  text-sm md:text-md lg:text-xl  "
      >
        <PieGraph />
        <Employees />
      </div>
    </div>
  </div>
</template>
