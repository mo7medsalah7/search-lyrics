import SongCard from "./../cards/SongCard";
export default function SearchResults({ data }) {
  return (
    <div>
      <div className="container m-auto">
        {data.message.body.track_list.map((track) => (
          <SongCard key={track.track.track_id} track={track} />
        ))}
      </div>
    </div>
  );
}
