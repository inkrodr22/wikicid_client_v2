import React from 'react';
import { router } from '~/pages/router.tsx';
import { RouterProvider } from 'react-router-dom';

import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import createIDBPersister from '~/app/App.helpers.ts';

const queryClient = new QueryClient();
const persister = createIDBPersister();

export default function App() {
  return (
    // <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <RouterProvider router={router} />
    </PersistQueryClientProvider>
    // </React.StrictMode>
  );
}
