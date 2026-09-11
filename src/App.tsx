import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import HeroSection from "./pages/HomePage";
import About from "./pages/About";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TvShowPage from "./pages/TvShowPage";
import TvShowFavorite from "./components/tvshow/TvShowFavorite";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HeroSection,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "tvshowpage",
        Component: TvShowPage,
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
