import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <main className="home">
        <section>
          <p>
            1 000 000+
            <br />
            Movies, TV shows, and more
          </p>
          <div className="container">
            <form id="homeForm">
              <input
                type="text"
                placeholder="Search by name..."
                id="movieNameInputHome"
              />
              <button type="submit" id="homeSearchButton">
                Search
              </button>
            </form>
          </div>
        </section>
      </main>
      <section className="home movieType">
        <h2>Trending today:</h2>
        <div className="container">
          <div className="containerPopular figureContainer"></div>
        </div>

        <h2>Now playing:</h2>
        <div className="container">
          <div className="containerNowplaying figureContainer"></div>
        </div>

        <h2 id="genre">By category:</h2>
        <div className="container genres">
          <Link to="/genres/28">Action</Link>
          <Link to="/genres/35">Comedy</Link>
          <Link to="/genres/18">Drama</Link>
          <Link to="/genres/27">Horror</Link>
          <Link to="/genres/16">Animation</Link>
          <Link to="/genres/878">Science Fiction</Link>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
