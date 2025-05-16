import { useQuery } from '@tanstack/react-query';

export function usePokemon(name: string) {
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
    enabled: !!name,
  });
}