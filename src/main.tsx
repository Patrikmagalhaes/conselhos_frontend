import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SelectCharacter from './screens/SelectCharacter/index.tsx'
import Chat from './screens/Chat/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([

  {
    path: "/chat",
    element: <Chat />,
  }, {
    path: "/",
    element: <SelectCharacter />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
