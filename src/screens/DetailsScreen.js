import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import netflixIcon from "../images/netflix.png";

const DetailsScreen = ({ match }) => {
  const movieID = match.params.id;

  const [movieInfo, setMovieInfo] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(movieID);

    const fetchData = async () => {
      const { data: movieData } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=2050ac8db077eda8b90b74a0f1423975&append_to_response=videos%2Cimages`
      );

      setMovieInfo(movieData);
      console.log(movieData);
    };

    fetchData();
  }, [movieID]);

  return (
    <>
      <main className="details">
        <section>
          <p>
            <Link to="/">Home</Link> /{" "}
            <Link id="details" to={`/details/${movieID}`}>
              Details
            </Link>
          </p>
          <h2 id="moviename">{movieInfo.original_title}</h2>
        </section>
      </main>

      <section className="details">
        <div className="container">
          <div className="poster_wrapper">
            <img
              id="poster"
              alt="poster"
              src={
                movieInfo.poster_path &&
                `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
              }
            />
          </div>
          <div className="details-wrapper">
            <div className="container">
              <h2 id="movietitle">
                {movieInfo.original_title || movieInfo.original_name}
              </h2>
              <span id="year">{` (${
                movieInfo.release_date && movieInfo.release_date.split("-")[0]
              })`}</span>
              <p id="movieGenres">
                {movieInfo.genres &&
                  movieInfo.genres.map((genre) => genre.name).join(" \u25cf ")}
              </p>
              <div className="rating">
                Rating: <span id="score"> {movieInfo.vote_average}</span>
              </div>
              <i id="tagline">{movieInfo.tagline}</i>
              <div>
                <h2 className="overview">Overview</h2>
                <p id="overview">{movieInfo.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sources">
          <span>Watch on:</span>
          <a href="https://netflix.com" target="_blank" rel="noreferrer">
            <button>
              <img src={netflixIcon} alt="netflix" />
            </button>
          </a>
        </div>
      </section>

      <section className="media-wrapper">
        <h2>Most popular</h2>
        <div className="media container">
          <div className="mediacontainer" id="mediacontainer">
            <div id="novideo">
              <h1>NO VIDEO</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="media-wrapper">
        <h2>Backdrops:</h2>
        <div className="media container">
          <div className="mediacontainer" id="media2">
            <div id="novideo">
              <h1>NO MEDIA</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="media-wrapper">
        <h2>Videos:</h2>
        <div className="media container">
          <div className="mediacontainer" id="media3">
            <div id="novideo">
              <h1>NO MEDIA</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="media-wrapper">
        <h2>Posters:</h2>
        <div className="media container">
          <div className="mediacontainer" id="media4">
            <div id="novideo">
              <h1>NO MEDIA</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsScreen;
