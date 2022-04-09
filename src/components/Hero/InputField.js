import { useState } from "react";
import UseGetSongs from "./../../hooks/UseGetSongs";
import SearchResults from "./SearchResults";
import { useQueryClient, QueryCache } from "react-query";
import LoaderSpinner from "./../utils/LoaderSpinner";

export default function InputField() {
  const [word_from_lyrics, set_word_from_lyrics] = useState("");
  const [results, setResults] = useState(null);

  const queryClient = useQueryClient();

  // using hook
  const { isLoading, isError, error, data } = UseGetSongs(word_from_lyrics);

  const handleChange = async (e) => {
    e.preventDefault();

    let val = e.target.value;
    await set_word_from_lyrics(val);

    if (isLoading) {
      return (
        <span className="text-center">
          <LoaderSpinner />
        </span>
      );
    }

    if (isError) {
      return <span className="text-center">Error: {error.message}</span>;
    }

    if (val === "") {
      setResults(null);
    } else {
      setResults(data);
    }
  };

  return (
    <>
      <div className="container m-auto">
        <div className="m-auto text-center">
          <input
            className="w-9/12 h-12 outline-none px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border-indigo-500 border-solid border-b-2 focus:border-2 focus:border-pink-400 focus-visible:border-pink-400"
            type="text"
            placeholder="Search Your Lyrics"
            value={word_from_lyrics}
            onChange={(e) => {
              queryClient.removeQueries();
              handleChange(e);
            }}
          />
        </div>
      </div>
      {results ? <SearchResults data={results} /> : null}
    </>
  );
}
