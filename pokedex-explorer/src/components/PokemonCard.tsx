import { useQuery } from "@tanstack/react-query";

type PokemonCardProps = {
  name: string;
};

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });
  

  return (
    <div className="group relative w-48 h-56 rounded-lg border border-neutral-200 overflow-hidden cursor-pointer transition bg-[#f7bec0] hover:bg-[#e7625f] shadow-md hover:shadow-lg">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        {isPending && <p className="text-sm text-gray-500">Loading...</p>}
        {error && <p className="text-sm text-red-500">Error</p>}

        {data && (
          <>
            <img
              src={data.sprites.front_default}
              alt={name}
              className="w-20 h-20 object-contain mb-2"
            />
            <h2 className="text-lg font-semibold text-gray-800 capitalize">{name}</h2>
          </>
        )}
      </div>

      {/* Hover Types Overlay */}
      {data && (
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 py-2 bg-[#c85250] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {data.types.map((typeInfo: any) => (
            <span
              key={typeInfo.slot}
              className="px-2 py-1 text-xs font-medium text-black bg-[#f1d5ce] rounded-full capitalize"
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
