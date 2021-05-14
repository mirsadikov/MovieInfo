import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import netflixIcon from "../images/netflix.png";

const DetailsScreen = ({ match }) => {
  const movieID = match.params.id;

  const [movieInfo, setMovieInfo] = useState({});

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

      {((movieInfo.videos && movieInfo.videos.results.length > 0) ||
        movieInfo.backdrop_path ||
        movieInfo.poster_path) && (
        <>
          <section className="media-wrapper">
            <h2>Most popular</h2>
            <div className="media container">
              <div className="mediacontainer" id="mediacontainer">
                {movieInfo.videos && movieInfo.videos.results.length > 0 && (
                  <iframe
                    title={movieInfo.videos.results[0].name}
                    width="600"
                    src={`https://www.youtube-nocookie.com/embed/${movieInfo.videos.results[0].key}?controls=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                {movieInfo.poster_path && (
                  <img
                    alt="poster"
                    src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                  />
                )}
                {movieInfo.backdrop_path && (
                  <img
                    alt="backdrop"
                    src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
                  />
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {movieInfo.images &&
        movieInfo.images.backdrops.slice(1, 51).length !== 0 && (
          <>
            <section className="media-wrapper">
              <h2>Backdrops:</h2>
              <div className="media container">
                <div className="mediacontainer" id="media2">
                  {movieInfo.images.backdrops.slice(1, 51).map((image) => (
                    <img
                      alt="Backdrop"
                      key={image.file_path}
                      src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

      {movieInfo.videos && movieInfo.videos.results.slice(1, 11).length !== 0 && (
        <>
          <section className="media-wrapper">
            <h2>Videos:</h2>
            <div className="media container">
              <div className="mediacontainer" id="media3">
                {movieInfo.videos.results.slice(1, 11).map((video) => (
                  <iframe
                    key={video.id}
                    title={video.name}
                    width="600"
                    src={`https://www.youtube-nocookie.com/embed/${video.key}?controls=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {movieInfo.images && movieInfo.images.posters.slice(1, 50).length !== 0 && (
        <>
          <section className="media-wrapper">
            <h2>Posters:</h2>
            <div className="media container">
              <div className="mediacontainer" id="media4">
                {movieInfo.images.posters.slice(1, 50).map((image) => (
                  <img
                    alt="Backdrop"
                    key={image.file_path}
                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DetailsScreen;
