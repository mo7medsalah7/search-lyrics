import { useQuery } from "react-query";
import axios from "axios";

export default function UseTop10() {
  return useQuery("topSongs", () => {
    return axios
      .get(
        `http://cors-access-allow.herokuapp.com/${process.env.REACT_APP_API_URL}/chart.tracks.get?apikey=${process.env.REACT_APP_API_KEY}&country=it`
      )
      .then((res) => {
        return res.data;
      });
  });
}
