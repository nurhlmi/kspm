import { useRoutes } from 'react-router-dom';

import LandingPageLayout from './layouts/LandingPageLayout';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import AppLayout from './layouts/AppLayout';
// import DashboardLayout from './layouts/dashboard';

// Landing Page
import LandingPage from './pages/LandingPage';
import JadwalSholat from './pages/JadwalSholat';

// Auth
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';

// Dashboard
// import Blog from './pages/Blog';
// import User from './pages/User';
// import Products from './pages/Products';
// import DashboardApp from './pages/DashboardApp';

// App
import Home from './pages/app/Home';
import Profile from './pages/app/Profile';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LandingPageLayout />,
      children: [
        { path: '', element: <LandingPage /> },
        { path: 'jadwal-sholat', element: <JadwalSholat /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: 'app',
      element: <AppLayout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'profile', element: <Profile /> },
      ],
    },
    //  {
    //    path: '/dashboard',
    //    element: <DashboardLayout />,
    //    children: [
    //      { path: 'app', element: <DashboardApp /> },
    //      { path: 'user', element: <User /> },
    //      { path: 'products', element: <Products /> },
    //      { path: 'blog', element: <Blog /> },
    //    ],
    //  },
    { path: '*', element: <NotFound replace /> },
  ]);
}
