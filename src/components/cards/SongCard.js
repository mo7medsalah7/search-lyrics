import "./SongCard.css";
import { AiFillHeart } from "react-icons/ai";

export default function SongCard({ track }) {
  return (
    <div className="mainCard shadow-xl p-4 border-pink-500 border-solid border-b-2">
      <div className="grid grid-cols-2">
        <p className="col-start-1 col-end-3 md:font-medium sm:font-light">
          {track.track.track_name}
        </p>

        <span className="col-start-4 bg-gray-200 bg-opacity-50 md:rounder-md lg:rounded-lg sm:rounder-sm px-2 py-1">
          <AiFillHeart className="text-pink-700 m-auto" />
          <p className="m-auto text-center">{track.track.num_favourite}</p>
        </span>
      </div>
      <span className="bg-pink-500 text-yellow-50 ml-4 italic px-2">
        {track.track.artist_name}
      </span>
      <div>
        <button className="transition-all focus:outline-none bg-indigo-500 hover:bg-gray-200 text-white hover:text-gray-600 font-semibold py-1 px-4 mt-2 w-full rounded shadow">
          View Lyrics
        </button>
      </div>
    </div>
  );
}
