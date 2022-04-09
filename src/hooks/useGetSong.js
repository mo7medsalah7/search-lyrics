import { useQueryClient, useQuery, queryCache } from "react-query";
import axios from "axios";

export default function useGetSongData(track_id) {
  return useQuery("song-data", () => {
    return axios
      .get(
        `http://cors-access-allow.herokuapp.com/${process.env.REACT_APP_API_URL}/track.lyrics.get?track_id=${track_id}&apikey=${process.env.REACT_APP_API_KEY}&page=1&page_size=10`
      )
      .then((res) => {
        return res.data;
      });
  });
}
