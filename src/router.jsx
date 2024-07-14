import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";

const router = createBrowserRouter([ //배열
  { //객체(자료구조)
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }], //array, keyvalue 객체
  },
  {
    path: "/",
    element: <App />,
    children: [{ path:"/detail/1", element: <PostDetailPage />}]
  }
]);

export default router;
