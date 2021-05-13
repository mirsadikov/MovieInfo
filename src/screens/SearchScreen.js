import { Link } from "react-router-dom";

const SearchScreen = () => {
  return (
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
              />
              <button type="submit" id="searchButton">
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
              checked
              id="type-movie"
              className="type-input"
              name="type"
            />
            <div id="typemovie" className="movieType">
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
            />
            <div id="typeserie" className="movieType">
              TV shows
            </div>
          </label>
        </div>

        <section id="resultContainer">
          <h1>Search something</h1>
        </section>
      </section>
    </>
  );
};

export default SearchScreen;
