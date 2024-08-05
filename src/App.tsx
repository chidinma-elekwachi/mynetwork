import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Network from "./Pages/Network/Network";
import Jobs from "./Pages/Jobs/Jobs";
import Gallery from "./Pages/Gallery/Gallery";
import Groups from "./Pages/Groups/Groups";
import Events from "./Pages/Events/Events";
import ClubNavbar from "./Pages/Clubs/NavBar";

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
    path: "/friends",
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
        <Jobs />
      </Navbar>
    ),
  },
  {
    path: "/groups",
    element: (
      <Navbar>
        <Groups />
      </Navbar>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Navbar>
        <Gallery />
      </Navbar>
    ),
  },
  {
    path: "/events",
    element: (
      <Navbar>
        <Events />
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
  {
    path: "/clubs",
    element: <ClubNavbar />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
