import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const trendingMoviesAPI =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=2050ac8db077eda8b90b74a0f1423975";
const nowPlayingMoviesAPI =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=2050ac8db077eda8b90b74a0f1423975&language=en-US&page=1";

const HomeScreen = ({ history }) => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data: trending } = await axios.get(trendingMoviesAPI);
      const { data: nowPlaying } = await axios.get(nowPlayingMoviesAPI);

      setTrendingMovies(trending);
      setNowPlayingMovies(nowPlaying);
    };
    fetchData();
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchQuery}`);
  };

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
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                id="homeSearchButton"
                onClick={searchHandler}
              >
                Search
              </button>
            </form>
          </div>
        </section>
      </main>
      <section className="home movieType">
        <h2>Trending today:</h2>
        <div className="container">
          <div className="containerPopular figureContainer">
            <section className="figuresContainer">
              {trendingMovies &&
                trendingMovies.results.map((movie) => (
                  <Link to={`/details/movie/${movie.id}`} key={movie.id}>
                    <figure>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.original_title}
                      />
                      <figcaption>
                        {movie.original_title || movie.original_name}
                      </figcaption>
                    </figure>
                  </Link>
                ))}
            </section>
          </div>
        </div>

        <h2>Now playing:</h2>
        <div className="container">
          <div className="containerNowplaying figureContainer">
            <section className="figuresContainer">
              {nowPlayingMovies &&
                nowPlayingMovies.results.map((movie) => (
                  <Link to={`/details/movie/${movie.id}`} key={movie.id}>
                    <figure>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.original_title}
                      />
                      <figcaption>
                        {movie.original_title || movie.original_name}
                      </figcaption>
                    </figure>
                  </Link>
                ))}
            </section>
          </div>
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
