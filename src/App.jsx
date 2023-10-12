// ==============|| PACKAGES IMPORTS ||==================
// import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ==============|| IMAGES IMPORTS ||==================

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NoMatch from "./pages/no_match/NoMatch";
import LayoutGeneral from "./layout/LayoutGeneral";
import Blogs from "./pages/blogs/Blogs";
import Testing from "./pages/testing/Testing";
import NewNote from "./pages/new_note/NewNote";

let router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutGeneral />,
    children: [
      {
        path: "/",
        element: <Home />,
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
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<LayoutGeneral />}>
  //         <Route index element={<Home />} />
  //         <Route path="about" element={<About />} />
  //         <Route path="blogs" element={<Blogs />} />
  //         <Route path="new-note" element={<NewNote />} />
  //         <Route path="testing" element={<Testing />} />

  //         <Route path="*" element={<NoMatch />} />
  //       </Route>
  //     </Routes>
  //   </>
  // );
}

export default App;
