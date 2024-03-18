import AboutUser from "../pages/About-user";
import CheckOut from "../pages/CheckOut";
import Detail from "../pages/Detail";
import ListProducts from "../pages/ListProducts";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

const routes = [
  { path: "/", page: HomePage },
  { path: "/products", page: ListProducts, isPrivateRoute: true },
  { path: "/products/:id", page: Detail },
  { path: "*", page: NotFound, isLayout: null },
  { path: "/login", page: Login, isLayout: "header" },
  { path: "/checkout", page: CheckOut, isPrivateRoute: true },
  { path: "/blogs", page: Blogs, isPrivateRoute: true },
  { path: "/contact", page: Contact },
  { path: "/about-user", page: AboutUser, isLayout: "header" },
];

export { routes };
