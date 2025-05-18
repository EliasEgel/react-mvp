import { createFileRoute } from "@tanstack/react-router";
import PokemonCard from "../components/PokemonCard";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("savedPokemon") || "[]");
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-8 text-center bg-[#f1d5ce]">
      <h1 className="capitalize text-3xl font-bold text-[#c85250]">
        your Favorites
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
        {favorites.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No favorites yet.
          </p>
        ) : (
          favorites.map((pokemon) => (
            <PokemonCard key={pokemon} name={pokemon} />
          ))
        )}
      </div>
    </div>
  );
}
