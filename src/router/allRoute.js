
import HomePage from '../views/Home/HomePage';
import Login from '../views/Login/Login';
import AllProduct from '../views/AllProduct/AllProduct';
import SingleProduct from '../views/SingleProduct/SingleProduct';
import AddToCart from '../views/AddToCart/AddToCart';

const allRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/all-products", component: AllProduct },
  { path: "/single-product", component: SingleProduct },
  { path: "/add-to-cart", component: AddToCart},
];
export default allRoutes;
