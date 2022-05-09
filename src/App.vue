<template>
  <div id="app" :class="GET_THEME.theme">
    <Home />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Home from "./views/Home.vue";
export default {
  name: "app",
  components: { Home },
  methods: {
    ...mapActions(["USER_RESPONSE", "REPORT_RESPONSE"]),
  },
  computed: {
    ...mapGetters(["GET_THEME"]),
  },
  created() {
    this.USER_RESPONSE();
    this.REPORT_RESPONSE();
  },
};
</script>
