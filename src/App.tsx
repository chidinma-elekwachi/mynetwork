import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <Home />
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
  {
    path: "/messaging",
    element: (
      <Navbar>
        <div>Message</div>
      </Navbar>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
