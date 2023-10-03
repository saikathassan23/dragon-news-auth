import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Career from '../pages/Career';
import Error from '../pages/Error';
import Home from '../pages/Home';
import NewsDetails from '../pages/NewsDetails/NewsDetails';

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/news-details/:newsId',
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default myRoutes;
