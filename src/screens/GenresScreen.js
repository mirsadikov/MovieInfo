import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GenresScreen = ({ match }) => {
  const [page, setpage] = useState(1);
  const [genreName, setgenreName] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const genreID = match.params.genre;

  useEffect(() => {
    page === 1 && window.scrollTo(0, 0);

    const fetchAPI = async () => {
      // get genre name
      const { data: genresData } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=2050ac8db077eda8b90b74a0f1423975`
      );
      const genre = genresData.genres.filter(
        (genre) => genre.id === parseInt(genreID)
      )[0];

      // get movies by genreID
      const { data: moviesData } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=2050ac8db077eda8b90b74a0f1423975&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genreID}`
      );

      // console.log(moviesList);
      // console.log(moviesData.results);

      setgenreName(genre.name);
      setMoviesList([...moviesList, ...moviesData.results]);
    };

    fetchAPI();
  }, [genreID, page]);

  const moreHandler = () => {
    // const { data: moreMovies } = axios.get(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=2050ac8db077eda8b90b74a0f1423975&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genreID}`
    // );
    setpage(page + 1);
  };

  return (
    <>
      <main className="genre">
        <section>
          <p>
            <Link to="/">Home</Link> /{" "}
            <Link to={`/genres/${genreID}`}>Genres</Link>
          </p>
          <h2 id="genrename">{genreName}</h2>
        </section>
      </main>
      <section className="content">
        <section id="resultContainer">
          <section className="figuresContainer">
            {moviesList ? (
              moviesList.map((movie) => (
                <Link to={`/details/${movie.id}`} key={movie.id}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.id}
                    />
                    <figcaption>
                      {movie.original_title || movie.original_name}
                    </figcaption>
                  </figure>
                </Link>
              ))
            ) : (
              <h1>No movies</h1>
            )}
          </section>
        </section>
        <button id="more" onClick={moreHandler}>
          MORE
        </button>
      </section>
    </>
  );
};

export default GenresScreen;
