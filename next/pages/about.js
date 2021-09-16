import Head from "next/head";
import Link from "next/link";

export default function about() {
  return (
    <>
      <Head>
        <title>MovieInfo | About</title>
      </Head>
      <main className="about">
        <section>
          <p>
            <Link href="/">Home</Link> / <Link href="/about">About</Link>
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
              <h3>Tools used:</h3>
              <li>NextJS</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>
              This website is Next.js version of MovieInfo.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
