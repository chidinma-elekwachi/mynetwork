import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <div>Home</div>
      </Navbar>
    ),
  },
  {
    path: "/network",
    element: (
      <Navbar>
        <div>Network</div>
      </Navbar>
    ),
  },
  {
    path: "/jobs",
    element: (
      <Navbar>
        <div>Jobs</div>
      </Navbar>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
