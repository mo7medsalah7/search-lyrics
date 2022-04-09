import "./App.css";
import { useState } from "react";

import { ReactQueryDevtools } from "react-query/devtools";

import Header from "./components/Header/Header";

import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/Home/index";

import TrackLyrics from "./pages/single/TrackLyrics";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  const [tracksShown, setTracksShown] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:track_id" exact component={TrackLyrics} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
