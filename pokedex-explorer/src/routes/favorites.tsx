import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import PokemonCard from "../components/PokemonCard";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});

function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedPokemon") || "[]");
    setFavorites(saved);
  }, []);

  const removeFromFavorites = (name: string) => {
    const updated = favorites.filter((fav) => fav !== name);
    setFavorites(updated);
    localStorage.setItem("savedPokemon", JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4 py-8 text-center bg-[#f1d5ce]">
      <h1 className="capitalize text-3xl font-bold text-[#c85250]">
        Your Favorites
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
        {favorites.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No favorites yet.
          </p>
        ) : (
          favorites.map((pokemon) => (
            <div key={pokemon} className="flex flex-col items-center">
              <PokemonCard name={pokemon} />
              <button
                onClick={() => removeFromFavorites(pokemon)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
