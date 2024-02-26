import AboutUser from "../pages/About-user";
import CheckOut from "../pages/CheckOut";
import Detail from "../pages/Detail";
import ListProducts from "../pages/ListProducts";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";

const routes = [
  { path: "/", page: HomePage },
  { path: "/products", page: ListProducts, isPrivateRoute: true },
  { path: "/products/:id", page: Detail },
  { path: "*", page: NotFound, isLayout: null },
  { path: "/login", page: Login, isLayout: "header" },
  { path: "/checkout", page: CheckOut, isPrivateRoute: true },
  { path: "/about-user", page: AboutUser, isLayout: "header" },
];

export { routes };
