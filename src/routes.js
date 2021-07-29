import Index from "views/Index.js";

// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";

import OnlineStore from "views/examples/OnlineStore";
import OthersStore from "views/examples/OthersStore";
import Orders from "views/examples/Orders";
import Products from "views/examples/Products";
import Customers from "views/examples/Customers";
import Analytics from "views/examples/Analytics";
import ProfileUser from "views/ProfileUser";

var routes = [
  {
    path: "/index",
    name: "Home",
    // icon ppte: text-primary text-blue text-orange text-yellow
    icon: "fa fa-home text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "fa fa-shopping-cart text-blue",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "fa fa-tag text-orange",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "ni ni-single-02 text-yellow",
    component: Customers,
    layout: "/admin",
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "fas fa-chart-line text-yellow",
    component: Analytics,
    layout: "/admin",
  },

  {
    path: "/online_store",
    name: " Online Store",
    icon: "fas fa-store",
    component: OnlineStore,
    layout: "/admin",
  },
  {
    path: "/others_store",
    name: "Others Store",
    icon: "fas fa-cloud ",
    component: OthersStore,
    layout: "/admin",
  },
  {
    path: "/index ",
    name: "User",
    icon: "fas fa-cloud ",
    component: OthersStore,
    layout: "/user",
  },
  {
    path: "/profile ",
    name: "User",
    icon: "fas fa-cloud ",
    component: ProfileUser,
    layout: "/user",
  },
]
;
export default routes;

// {
//   path: "/login",
//   name: "Login",
//   icon: "ni ni-key-25 text-info",
//   component: Login,
//   layout: "/auth",
// },
// {
//   path: "/register",
//   name: "Register",
//   icon: "ni ni-circle-08 text-pink",
//   component: Register,
//   layout: "/auth",
// },
