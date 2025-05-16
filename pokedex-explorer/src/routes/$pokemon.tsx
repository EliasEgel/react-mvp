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
    <div>
      <h1 className="capitalize text-3xl font-bold">{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      {data.stats.map((s: any) => (
        <StatBar
          key={s.stat.name}
          statName={s.stat.name}
          baseStat={s.base_stat}
        />
      ))}
    </div>
  );
}
