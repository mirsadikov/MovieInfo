import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const trendingMoviesAPI =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=2050ac8db077eda8b90b74a0f1423975";
const nowPlayingMoviesAPI =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=2050ac8db077eda8b90b74a0f1423975&language=en-US&page=1";

export default function Home() {
  const router = useRouter();
  const searchHandler = (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchQuery}`);
  };

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

  return (
    <div>
      <Head>
        <title>MovieInfo | Home</title>
      </Head>
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
                  <Link href={`/details/movie/${movie.id}`} key={movie.id}>
                    <a>
                      <figure>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.original_title}
                        />
                        <figcaption>
                          {movie.original_title || movie.original_name}
                        </figcaption>
                      </figure>
                    </a>
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
                  <Link href={`/details/movie/${movie.id}`} key={movie.id}>
                    <a>
                      <figure>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.original_title}
                        />
                        <figcaption>
                          {movie.original_title || movie.original_name}
                        </figcaption>
                      </figure>
                    </a>
                  </Link>
                ))}
            </section>
          </div>
        </div>

        <h2 id="genre">By category:</h2>
        <div className="container genres">
          <Link href="/genres/28">Action</Link>
          <Link href="/genres/35">Comedy</Link>
          <Link href="/genres/18">Drama</Link>
          <Link href="/genres/27">Horror</Link>
          <Link href="/genres/16">Animation</Link>
          <Link href="/genres/878">Science Fiction</Link>
        </div>
      </section>
    </div>
  );
}
