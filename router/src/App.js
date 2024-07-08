import "./App.css";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import NotFounds from "./pages/NotFounds";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import VideoDeatil from "./pages/VideoDeatil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFounds />,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDeatil /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
