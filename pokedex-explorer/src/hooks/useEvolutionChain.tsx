import { useQuery } from "@tanstack/react-query";

async function fetchEvolutionChain(pokemonId: number) {
  const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
  if (!speciesRes.ok) throw new Error("Failed to fetch species");
  const speciesData = await speciesRes.json();

  const evolutionUrl = speciesData.evolution_chain?.url;
  if (!evolutionUrl) throw new Error("No evolution chain found");

  const evoRes = await fetch(evolutionUrl);
  if (!evoRes.ok) throw new Error("Failed to fetch evolution chain");
  const evoData = await evoRes.json();

  return evoData.chain;
}

export function useEvolutionChain(pokemonId: number) {
  return useQuery({
    queryKey: ["evolutionChain", pokemonId],
    queryFn: () => fetchEvolutionChain(pokemonId),
    enabled: !!pokemonId,
  });
}