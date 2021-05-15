import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../images/no-image.png";
import duck from "../images/duck.gif";
import Loader from "../components/Loader";

const SearchScreen = ({ location, history }) => {
  const [query, setQuery] = useState();
  const [searchKeyword, setSearchKeyword] = useState();
  const [isMovie, setIsMovie] = useState(true);
  const [moviesList, setMoviesList] = useState([]);

  // useReducer
  // const [state, dispatch] = useReducer(reducer, initialState, init)

  useEffect(() => {
    window.scrollTo(0, 0);
    const queries = new URLSearchParams(location.search);
    const q = queries.get("q");
    searchKeyword ? setQuery(searchKeyword) : setQuery(q);

    const fetchData = async (type, query) => {
      console.log(type);
      const { data: moviesData } = await axios.get(
        `https://api.themoviedb.org/3/search/${type}?api_key=2050ac8db077eda8b90b74a0f1423975&query=${query}&include_adult=false`
      );

      console.log(moviesData);

      setMoviesList(moviesData.results);
    };

    if (isMovie && query) {
      fetchData("movie", query);
    } else if (!isMovie && query) {
      fetchData("tv", query);
    } else {
      history.push("/");
    }
  }, [location, isMovie, query, history]);

  const searchHandler = (e) => {
    e.preventDefault();
    setQuery(searchKeyword);
  };

  const typeChangeHandler = () => {
    setIsMovie(!isMovie);
  };

  return moviesList.length > 0 ? (
    <>
      <main className="result">
        <section>
          <p>
            <Link to="/">Home</Link> / <Link to="/search">Search</Link>
          </p>
          <h2 id="resultpath">Search</h2>
          <div className="container">
            <form>
              <input
                type="text"
                placeholder="Search by name..."
                id="movieNameInput"
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button type="submit" id="searchButton" onClick={searchHandler}>
                Search
              </button>
            </form>
          </div>
        </section>
      </main>
      <section className="content">
        <div id="content-type">
          <label>
            <input
              type="radio"
              hidden
              checked={isMovie}
              id="type-movie"
              className="type-input"
              name="type"
              readOnly
            />
            <div
              id="typemovie"
              className="movieType"
              onClick={typeChangeHandler}
            >
              Movies
            </div>
          </label>
          <label>
            <input
              type="radio"
              hidden
              id="type-serie"
              className="type-input"
              name="type"
              checked={!isMovie}
              readOnly
            />
            <div
              id="typeserie"
              className="movieType"
              onClick={typeChangeHandler}
            >
              TV shows
            </div>
          </label>
        </div>

        <section id="resultContainer">
          {query ? (
            moviesList.length !== 0 ? (
              <section className="figuresContainer">
                {moviesList.map((movie) => (
                  <Link
                    to={
                      isMovie
                        ? `/details/movie/${movie.id}`
                        : `/details/tv/${movie.id}`
                    }
                    key={movie.id}
                  >
                    <figure>
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                            : noimage
                        }
                        alt={movie.id}
                      />
                      <figcaption>
                        {movie.original_title || movie.original_name}
                      </figcaption>
                    </figure>
                  </Link>
                ))}
              </section>
            ) : (
              <>
                <h1>No movies</h1>
                <img className="duck" src={duck} alt="duck" />
              </>
            )
          ) : (
            <h1>Search something</h1>
          )}
        </section>
      </section>
    </>
  ) : (
    <Loader />
  );
};

export default SearchScreen;
