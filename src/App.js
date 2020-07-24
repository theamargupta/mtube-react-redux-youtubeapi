import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import VideoDetails from "./pages/VideoDetail";
import "./App.css";
import Search from "./components/Search";
import SearchResultPage from "./pages/SearchResultPage";
import PlaylistPage from "./pages/PlaylistPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/videos/:videoId" component={VideoDetails} />
        <Route exact path="/playlists" component={PlaylistPage} />
        <Route exact path="/search/:searchQuery" component={SearchResultPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
