import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from '~/components/Layout';
import Resources from 'src/pages/Cid/Resources';


export const router = createBrowserRouter([
  // Redirect to CID home if the user goes to the root path
  {
    path: '/',
    element: <Navigate to='/cid' replace />,
  },
  {
    path: '/',
    element: <Layout />,
    // errorElement: <Layout>404</Layout>,
    handle: {
      title: () => 'WikiCID',
    },
    children: [
      {
        path: 'resources',
        element: <Resources />,
        handle: {
          title: () => 'WikiCID - Recursos',
        },
      },
    ],
  },
  // Redirect to CID home if the user goes to an unknown path, could be a 404 page
  {
    path: '*',
    element: <Navigate to='/cid' replace />,
  },
]);
