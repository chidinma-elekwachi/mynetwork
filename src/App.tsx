import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Network from "./Pages/Network/Network";

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
        <Network />
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
