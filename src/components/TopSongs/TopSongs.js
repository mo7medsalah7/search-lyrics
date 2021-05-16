import UseTop10 from "../../hooks/UseTop10";
import SongCard from "../cards/SongCard";
import "./TopSongs.css";
import LoaderSpinner from "./../utils/LoaderSpinner";

export default function TopSongs() {
  const { isLoading, isError, error, data } = UseTop10();

  if (isLoading) {
    return (
      <span>
        <LoaderSpinner />
      </span>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div className="container m-auto mt-11">
        <div>
          <h2 className="sm:text-base md:text-2xl lg:text-3xl font-bold text-center mb-4 text-indigo-500">
            Top <span className="number-of-top">10</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {data.message.body.track_list.map((track) => (
            <SongCard key={track.track.track_id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
}
