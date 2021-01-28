import { createRouter, createWebHashHistory } from "vue-router";
import JobList from "../views/JobList.vue";

const routes = [
  {
    path: "/",
    name: "job-list",
    component: JobList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
