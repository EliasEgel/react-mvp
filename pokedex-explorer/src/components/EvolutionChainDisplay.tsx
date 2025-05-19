import { useEvolutionChain } from "../hooks/useEvolutionChain";

function EvolutionChainDisplay({ pokemonId }: { pokemonId: number }) {
  const {
    data: chain,
    isPending,
    error,
  } = useEvolutionChain(pokemonId);

  if (isPending) return <p>Loading evolution chain...</p>;
  if (error || !chain) return <p className="text-red-500">Error loading evolution chain.</p>;

  return <EvolutionBranch chain={chain} />;
}

function EvolutionBranch({ chain }: { chain: any }) {
  if (!chain?.species) return null;

  return (
    <div className="ml-4 border-l-2 border-[#c85250] pl-4">
      <p className="capitalize font-semibold text-[#c85250]">
        {chain.species.name}
      </p>

      {chain.evolves_to.length > 0 && (
        <div className="mt-2 space-y-2">
          {chain.evolves_to.map((evo: any) => (
            <div key={evo.species.name} className="flex flex-col">
              <span className="text-sm text-gray-600">evolves to:</span>
              <EvolutionBranch chain={evo} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EvolutionChainDisplay;