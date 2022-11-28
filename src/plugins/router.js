import Home from "@/components/Home";
import Artigo from "@/components/Artigo";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/artigos", name: "artigos", component: Artigo },
];

export const routeNames = () => {
    return routes.map((route) => {
        return route.name;
    })
}

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
