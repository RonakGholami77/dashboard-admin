import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import User from "./pages/Users/User/User";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/user/:idUser", element: <User /> },

  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:idProduct", element: <Products /> },
];

export default routes;
