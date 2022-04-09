import { useQueryClient, useQuery, queryCache } from "react-query";
import axios from "axios";

export default function UseGetSongs(anyWord) {
  return useQuery("results", () => {
    return axios
      .get(
        `http://cors-access-allow.herokuapp.com/${process.env.REACT_APP_API_URL}/track.search?q=${anyWord}&apikey=${process.env.REACT_APP_API_KEY}&page=1&page_size=10`
      )
      .then((res) => {
        return res.data;
      });
  });
}
