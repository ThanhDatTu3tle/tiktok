import config from '~/config';

// Layouts
import { DefaultLayout, HeaderOnly } from '~/layouts/';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
  { path: config.routes.home, component: Home,  layout: DefaultLayout  },
  { path: config.routes.following, component: Following, layout: DefaultLayout },
  { path: config.routes.profile, component: Profile, layout: DefaultLayout },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
