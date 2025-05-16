import { useQuery } from "@tanstack/react-query";
import PokemonCard from "./PokemonCard";

function Gallery() {
  const { data, isPending, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
        {data.results.map((pokemon: { name: string }) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
      </div>
    </>
  );
}

export default Gallery;
