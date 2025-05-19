import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { usePokemon } from "../hooks/usePokemon";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const navigate = useNavigate();

  const { data, isPending, error } = usePokemon(submittedName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(input.trim().toLowerCase());
  };

  // Navigate to the Pokémon page when valid data is fetched
  if (data && submittedName) {
    navigate({ to: "/$pokemon", params: { pokemon: submittedName } });
  }
  useEffect(() => {
    if (error && submittedName) {
      toast.error("Pokémon not found. Try another name.");
    }
  }, [error, submittedName]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 p-6"
    >
      <input
        type="text"
        placeholder="Search Pokémon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 border rounded w-64 text-black"
      />
      <button
        type="submit"
        className="bg-[#e7625f] hover:bg-[#c85250] text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>

      {isPending && submittedName && (
        <p className="text-sm text-gray-600">Searching...</p>
      )}
      <ToastContainer />
    </form>
  );
};

export default SearchForm;
