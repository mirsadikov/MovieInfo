import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="about">
        <section>
          <p>
            <Link to="/">Home</Link> / <Link to="/about">About</Link>
          </p>
          <h2>ABOUT</h2>
        </section>
      </main>

      <article className="about">
        <i>
          “This website was created to fulfill Web Technology module’s
          requirements and does not represent an actual company or service”.
        </i>
        <section>
          <div>
            This website is created by the student of the Westminster University
            in Tashkent to fulfill Web Technology module’s requirements. Website
            contains six responsive pages. This website is designed according a
            movie hosting platform Netflix.com and written from a scratch. Some
            contents borrowed from Netflix.com. Informations about movies and TV
            shows are borrowed from TheMovieDB.org using API.
          </div>
          <div>
            <ul>
              <h3>Languages used:</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>
              This website doesn't use CSS (i.e. Bootstrap, Bulma, etc.) or JS
              (i.e. JQuery) libraries to style and make pages dynamic.
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export default AboutScreen;
