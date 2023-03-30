import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home'
import Register from './pages/Register'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  }

])

function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;
