import "./App.css";
import { useState } from "react";

import { ReactQueryDevtools } from "react-query/devtools";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TopSongs from "./components/TopSongs/TopSongs";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [tracksShown, setTracksShown] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Hero />

      <TopSongs />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
