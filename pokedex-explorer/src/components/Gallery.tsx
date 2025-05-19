import { useQuery } from "@tanstack/react-query";
import PokemonCard from "./PokemonCard";

function Gallery() {
  const { data, isPending, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon//?offset=0&limit=151`
      );
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="text-center text-2xl text-[#c85250]">
        Search up your Favorite Pokémon or choose one of the first 151 below
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
        {data.results.map((pokemon: { name: string }) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
