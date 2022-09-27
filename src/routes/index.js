import routesConfig from '~/config/routes';

// Layouts
import { DefaultLayout, HeaderOnly } from '~/components/Layouts/';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
  { path: routesConfig.home, component: Home,  layout: DefaultLayout  },
  { path: routesConfig.following, component: Following, layout: DefaultLayout },
  { path: routesConfig.profile, component: Profile, layout: DefaultLayout },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
