import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import MovieVideoPlayer from "../Components/MovieVideoPlayer";
import RecentlyAdded from "../Components/RecentlyAdded";

function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideoPlayer />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </div>
  );
}

export default HomePage;
