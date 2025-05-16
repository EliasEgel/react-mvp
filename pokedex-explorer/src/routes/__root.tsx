import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "../components/navigation";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />

      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
