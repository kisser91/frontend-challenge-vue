<template>
  <div class="outer-container pt-full md:col-span-3">
    <div class="inner-container ">
      <div>
        <h1 class="text-gray-500">Why do you create a startup?</h1>
        <h3 class="text-gray-900 dark:text-gray-200 text-opacity-40">
          Trends
        </h3>
      </div>
      <div
        class="h-full graph-margin-sm md:graph-margin-md lg:graph-margin-lg lg:pt-6 xl:pt-16 "
      >
        <div class="pt-full relative">
          <div
            class="absolute w-full h-full top-0 "
            :style="
              `background: conic-gradient(` +
                GET_REPORT_RESPONSE.style +
                `); border-radius: 50%;`
            "
          />
        </div>
      </div>
      <div class="inline-flex justify-around top-0 py-3 relative ">
        <div
          class=" inline-flex"
          v-for="report in GET_REPORT_RESPONSE.data"
          :key="report.id"
        >
          <div class="flex flex-col text-xs">
            <div
              class=" w-4 h-4 lg:w-6 lg:h-6 rounded-full mb-1"
              :style="
                `background-color: ` + report.color + `; border-radius: 9999px`
              "
            />
            <h1 class="text-sm md:text-md">{{ report.category }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PieGraph",
  computed: {
    ...mapGetters(["GET_REPORT_RESPONSE"]),
  },
};
</script>
