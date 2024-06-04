import Home from "../components/Home"
import Profile from "../components/Profile"
import Following from "../components/Following"
import Upload from "../components/Upload";
import HeaderOnly from "../Layout/HeaderOnly"

const publicRoutes = [
  { path: '/following', component: Following},
  { path: '/', component: Home},
  { path: '/profile', component: Profile},
  { path: '/upload', component: Upload, layout: HeaderOnly},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes} ;