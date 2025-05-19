import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { data, isPending, error } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const res = await fetch("/about.json");
      if (!res.ok) throw new Error("JSON not found");
      return res.json();
    },
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col items-center gap-4 px-4 py-8 text-center bg-[#f1d5ce] min-h-screen">
      <h1 className="capitalize text-3xl font-bold text-[#c85250]">
        About Pokédex Explorer
      </h1>

      <div className="grid grid-cols-1 w-xl  text-left">
        <div className="bg-white p-6 rounded-lg shadow-md w-full text-[#c85250] text-lg font-medium">
          <p className="mb-2">
            <span className="font-bold">Description:</span> {data.description}
          </p>
          <p className="mb-2">
            <span className="font-bold">Author:</span> {data.author}
          </p>
          <p className="mb-2">
            <span className="font-bold">Version:</span> {data.version}
          </p>
        </div>
      </div>
    </div>
  );
}
