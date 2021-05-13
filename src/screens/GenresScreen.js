import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GenresScreen = ({ match }) => {
  const [page, setpage] = useState(1);
  const [genreName, setgenreName] = useState("");
  const [moviesList, setmoviesList] = useState([{}]);
  const genreID = match.params.genre;

  useEffect(() => {
    const fetchAPI = async () => {
      // get genre name
      const { data: genresData } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=2050ac8db077eda8b90b74a0f1423975`
      );
      const genre = genresData.genres.filter(
        (genre) => genre.id === parseInt(genreID)
      )[0];
      setgenreName(genre.name);

      // get movies by genreID
      const { data: moveisData } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=2050ac8db077eda8b90b74a0f1423975&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genreID}`
      );
      console.log(moveisData.results);
      setmoviesList(moveisData.results);
    };

    fetchAPI();
  }, [genreID, page]);

  return (
    <>
      <main className="genre">
        <section>
          <p>
            <Link to="/">Home</Link> / <Link to="/genres/">Genres</Link>
          </p>
          <h2 id="genrename">{genreName}</h2>
        </section>
      </main>
      <section className="content">
        <section id="resultContainer">
          <section className="figuresContainer">
            {moviesList &&
              moviesList.forEach((movie) => {
                return (
                  <Link to={`/`}>
                    <figure>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      />
                      <figcaption>
                        {movie.original_title || movie.original_name}
                      </figcaption>
                    </figure>
                  </Link>
                );
              })}
          </section>
        </section>
        <button id="more">MORE</button>
      </section>
    </>
  );
};

export default GenresScreen;
