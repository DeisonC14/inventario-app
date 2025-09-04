/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import Proveedor from "views/pages/proveedor/Index.js";
import Cliente from "views/pages/cliente/Index.js";
import Categoria from "views/pages/categoria/Index.js";
import Caracteristica from "views/pages/caracteristica/Index.js";
import Articulo from "views/pages/articulo/Index.js";
import Compra from "views/pages/compra/Index.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/proveedor",
    name: "Proveedor",
    icon: "ni ni-watch-time text-primary",
    component: <Proveedor />,
    layout: "/admin",
  },
  {
    path: "/cliente",
    name: "Cliente",
    icon: "ni ni-single-02 text-primary",
    component: <Cliente />,
    layout: "/admin",
  },
  {
    path: "/categoria",
    name: "Categoria",
    icon: "ni ni-tag text-primary",
    component: <Categoria />,
    layout: "/admin",
  },
  {
    path: "/caracteristica",
    name: "Caracteristica",
    icon: "ni ni-single-copy-04 text-primary",
    component: <Caracteristica />,
    layout: "/admin",
  },
  {
    path: "/articulo",
    name: "Articulo",
    icon: "ni ni-single-02 text-primary",
    component: <Articulo />,
    layout: "/admin",
  },
  {
    path: "/compra",
    name: "Compra",
    icon: "ni ni-credit-card text-primary",
    component: <Compra />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  }
];
export default routes;
