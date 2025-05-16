import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});

function Favorites() {
  return <div className="bg-[#f1d5ce]">Hello "/favorites"!</div>;
}
