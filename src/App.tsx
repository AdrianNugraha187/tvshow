import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import TvShowFavorite from "./components/tvshow/TvShowFavorite";
import TvShowDetail from "./components/tvshow/TvShowDetail";
import "./App.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "tvshowdetail/:id",
        Component: TvShowDetail,
      },
      {
        path: "favorit",
        Component: TvShowFavorite,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
