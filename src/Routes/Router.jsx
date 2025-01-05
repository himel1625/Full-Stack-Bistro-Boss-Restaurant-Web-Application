import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layouts from '../Layouts/Layouts';
import Error from '../Pages/Error/Error';
import Menu from '../Pages/Menu/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
    ],
  },
]);

export default router;
