// Layouts
import { DefaultLayout, HeaderOnly } from '~/components/Layouts/';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
  { path: '/', component: Home,  layout: DefaultLayout  },
  { path: '/following', component: Following, layout: DefaultLayout },
  { path: '/profile', component: Profile, layout: DefaultLayout },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
