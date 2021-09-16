import Link from "next/link";

export default function Header() {
  return (
    <header>
      <a className="brand" href="/">
        <h1>MovieInfo</h1>
      </a>
      <nav>
        <ul>
          <li className="about">
            <Link href="/about">About</Link>
          </li>
          <li className="signIn">
            <Link href="/signin">
              <a className="signIn">Sign in</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
