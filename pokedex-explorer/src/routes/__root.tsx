import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "../components/Navigation";
import ScrollTop from "../components/ScrollTop";

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollTop />
      <Navigation />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
