import React from "react";

const AboutScreen = () => {
  return (
    <>
      <main class="about">
        <section>
          <p>
            <a href="./index.html">Home</a> / <a href="./about.html">About</a>
          </p>
          <h2>ABOUT</h2>
        </section>
      </main>

      <article class="about">
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
