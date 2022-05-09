<template>
  <div class="outer-container  md:col-span-5 ">
    <div class=" md:inner-container space-y-4 ">
      <h1 class=" ">Employees</h1>
      <div
        class=" border-gray-200 dark:border-gray-900 border-1  rounded-md overflow-y-auto  "
      >
        <div
          class="inline-grid grid-cols-9 text-xxs lg:text-sm w-full h-9 items-center lg:h-14"
        >
          <h1 class=" col-span-3 pl-2 ">Employees</h1>
          <h1 class=" col-span-2 pl-2">Last Login</h1>

          <h1 class=" col-span-2 pl-2 ">Department</h1>

          <h1 class=" col-span-2 ">Status</h1>
        </div>
        <div
          v-for="user in GET_USER_RESPONSE"
          :key="user.id"
          class="inline-grid grid-cols-9 w-full text-xxs lg:text-sm px-2 pt-2 border-t-1  border-gray-200 dark:border-gray-900 h-9 lg:h-12"
        >
          <div class=" col-span-3 flex items-center space-x-2 truncate ... ">
            <img
              :src="user.profile_img"
              class=" rounded-full h-4 w-4 lg:h-8 lg:w-8 lg:mx-2"
            />
            <div class="flex flex-col">
              <p class="font-bold">
                {{ user.first_name }} {{ user.last_name }}
              </p>
              <p class="text-ellipsis">{{ user.email }}</p>
            </div>
          </div>
          <div class=" col-span-2 pl-2 flex-items-center ">
            <p class="font-bold">fecha</p>
            <p>hace 2 dias</p>
          </div>
          <h1 class=" col-span-2 flex items-center pl-2">
            {{ user.department }}
          </h1>
          <div
            class=" col-span-2  inline-flex items-center justify-between pl-2 "
          >
            <h1 v-if="user.status" class="text-green-500">Active</h1>
            <h1 v-else class="text-red-500">Inactive</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 lg:h-5 lg:w-5 float-right"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Employees",
  computed: {
    ...mapGetters(["GET_USER_RESPONSE"]),
  },
  method: {},
};
</script>
