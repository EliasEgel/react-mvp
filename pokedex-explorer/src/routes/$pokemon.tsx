import { createFileRoute } from "@tanstack/react-router";
import { usePokemon } from "../components/usePokemon";
import StatBar from "../components/StatBar";

export const Route = createFileRoute("/$pokemon")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pokemon } = Route.useParams();
  const { data, isPending, error } = usePokemon(pokemon);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="flex flex-col items-center gap-4 px-4 py-8 text-center bg-[#f1d5ce]">
      {/* Name */}
      <h1 className="capitalize text-3xl font-bold text-[#c85250]">
        {data.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-20">
        <div>
          <img
            src={data.sprites.front_default}
            alt={data.name}
            className="w-32 h-32 object-contain"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#c85250]">Data</h2>
          <div className="text-black">Types:{data.types.map((typeInfo: any) => (
              <span
                key={typeInfo.type.name}
                className="px-3 py-1 bg-[#ffffff] text-[#c85250] text-sm font-medium rounded-full capitalize"
              >
                {typeInfo.type.name}
              </span>
            ))} </div>
             <div className="text-black">Weight: {data.weight/100} kg</div>
             <div className="text-black">Weight: {data.height/10} m</div>
        </div>
       
        <div className="w-full md:col-span-2 mt-6 px-4">
          <h2 className="text-xl font-semibold mb-4 text-[#c85250]">Stats</h2>
          {data.stats.map((s: any) => (
            <StatBar
              key={s.stat.name}
              statName={s.stat.name}
              baseStat={s.base_stat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
