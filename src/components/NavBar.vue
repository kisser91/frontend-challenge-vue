<template>
  <div
    class=" navbar w-full h-16 rounded-none md:rounded-md inline-flex  items-center px-2 md:px-8 text-white relative"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 border-white border-1 rounded-md p-1 mr-4 md:hidden "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <h1 class="text-3xl font-semibold">LOGO</h1>
    <div
      class="hidden md:inline-flex space-x-8 pl-20 font-medium lg:space-x-20"
    >
      <h3>MENU</h3>
      <h3>MENU</h3>
      <h3>MENU</h3>
      <h3>MENU</h3>
    </div>
    <LoginCorner />
    <TogleButton />
  </div>
</template>

<script>
import TogleButton from "./TogleButton.vue";
import LoginCorner from "./LoginCorner.vue";
export default {
  name: "NavBar",
  components: { TogleButton, LoginCorner },
};
</script>
