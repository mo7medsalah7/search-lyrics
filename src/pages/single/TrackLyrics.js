import useGetSongData from "../../hooks/useGetSong.js";
import LoaderSpinner from "./../../components/utils/LoaderSpinner";

export default function TrackLyrics(props) {
  const trackId = props.match.params.track_id;
  console.log(trackId);
  const { isLoading, isError, data, error } = useGetSongData(trackId);
  console.log("song-single", data);
  if (isLoading) {
    return (
      <span>
        <LoaderSpinner />
      </span>
    );
  }

  if (isError) {
    return <span className="text-center">Error: {error.message}</span>;
  }

  return (
    <div className="container mx-auto">
      <article className="p-6 mt-7 bg-gray-800 text-white rounded-md">
        {data.message.body.lyrics ? (
          data.message.body.lyrics.lyrics_body
        ) : (
          <div>
            <p>No data available for this song</p>
          </div>
        )}
      </article>
      <a href="/">
        <button className="transition-all focus:outline-none bg-indigo-500 hover:bg-gray-200 text-white hover:text-gray-600 font-semibold py-1 px-4 mt-2 w-full rounded shadow">
          Go Back
        </button>
      </a>
    </div>
  );
}
