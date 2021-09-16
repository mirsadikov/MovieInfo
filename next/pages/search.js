import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Loader from "../components/Loader";

export default function search() {
  const router = useRouter();

  const { q } = router.query;

  const [query, setQuery] = useState();
  const [searchKeyword, setSearchKeyword] = useState();
  const [isMovie, setIsMovie] = useState(true);
  const [moviesList, setMoviesList] = useState([]);

  // useReducer
  const initialState = { loading: false };

  function reducer(state, action) {
    switch (action.type) {
      case "input":
        // const queries = new URLSearchParams(location.search);
        // const q = queries.get("q");
        searchKeyword ? setQuery(searchKeyword) : setQuery(q);
        return { loading: true };
      case "finish":
        return { loading: false };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch({ type: "input" });

    const fetchData = async (type, query) => {
      console.log(type);
      const { data: moviesData } = await axios.get(
        `https://api.themoviedb.org/3/search/${type}?api_key=2050ac8db077eda8b90b74a0f1423975&query=${query}&include_adult=false`
      );

      console.log(moviesData);

      setMoviesList(moviesData.results);
      dispatch({ type: "finish" });
    };

    if (isMovie && query) {
      fetchData("movie", query);
    } else if (!isMovie && query) {
      fetchData("tv", query);
    } else {
      dispatch({ type: "finish" });
    }
  }, [isMovie, query]);

  const searchHandler = (e) => {
    e.preventDefault();
    searchKeyword && setQuery(searchKeyword);
    searchKeyword && router.push(`/search?q=${searchKeyword}`);
  };

  const typeChangeHandler = () => {
    setIsMovie(!isMovie);
  };

  return (
    <>
      <Head>
        <title>MovieInfo | Search</title>
      </Head>
      {!state.loading ? (
        <>
          <main className="result">
            <section>
              <p>
                <Link href="/">Home</Link> / <Link href="/search">Search</Link>
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
                  <button
                    type="submit"
                    id="searchButton"
                    onClick={searchHandler}
                  >
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
                        href={
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
                                : "/next/build/static/images/no-image.png"
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
                    <img
                      className="duck"
                      src="/next/build/static/images/duck.gif"
                      alt="duck"
                    />
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
      )}
    </>
  );
}
