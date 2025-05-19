import { Link } from "@tanstack/react-router";
import { useEvolutionChain } from "../hooks/useEvolutionChain";
import { usePokemon } from "../hooks/usePokemon";

function EvolutionChainDisplay({ pokemonId }: { pokemonId: number }) {
  const { data: chain, isPending, error } = useEvolutionChain(pokemonId);

  if (isPending) return <p>Loading evolution chain...</p>;
  if (error || !chain)
    return <p className="text-red-500">Error loading evolution chain.</p>;

  return <EvolutionBranch chain={chain} />;
}

function EvolutionBranch({ chain }: { chain: any }) {
  const { data, isPending } = usePokemon(chain.species.name);

  return (
    <div className="ml-4 border-l-2 border-[#c85250] pl-4">
      <div className="flex items-center gap-4">
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <>
            <Link to={`/${data.name}`}>
              {data?.sprites?.front_default && (
                <img
                  src={data.sprites.front_default}
                  alt={data.name}
                  className="w-16 h-16"
                />
              )}
              <p className="capitalize font-semibold text-[#c85250]">
                {chain.species.name}
              </p>
            </Link>
          </>
        )}
      </div>

      {chain.evolves_to.length > 0 && (
        <div className="mt-2 space-y-2">
          {chain.evolves_to.map((evo: any) => (
            <div key={evo.species.name} className="flex flex-col">
              <EvolutionBranch chain={evo} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EvolutionChainDisplay;
