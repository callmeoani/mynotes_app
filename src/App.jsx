// ==============|| PACKAGES IMPORTS ||==================
// import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./App.css";
import Home, { loader as homeLoader } from "./pages/home/Home";
import About from "./pages/about/About";
import NoMatch from "./pages/no_match/NoMatch";
import LayoutGeneral from "./layout/LayoutGeneral";
import Blogs from "./pages/blogs/Blogs";
import Testing from "./pages/testing/Testing";
import NewNote, { action as newNoteAction } from "./pages/new_note/NewNote";
import Note, {
  loader as noteLoader,
  action as noteAction,
} from "./pages/note/Note";

let router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutGeneral />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "new",
        element: <NewNote />,
        action: newNoteAction,
      },
      {
        path: "/note/:noteId",
        element: <Note />,
        loader: noteLoader,
        action: noteAction,
        errorElement: <h2>Note not found</h2>,
      },
      {
        path: "testing",
        element: <Testing />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
