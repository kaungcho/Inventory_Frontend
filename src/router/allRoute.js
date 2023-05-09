
import HomePage from '../views/Home/HomePage';
import Login from '../views/Login/Login';
import AllProduct from '../views/AllProduct/AllProduct';

const allRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/all-products", component: AllProduct },
];
export default allRoutes;
