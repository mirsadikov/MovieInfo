export default function Footer() {
  return (
    <footer>
      <div>
        Copyright &copy;
        {new Date().getFullYear()}
      </div>
      <div>
        Links:
        <a
          href="https://github.com/mirsadikov"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="networks"
            src="/static/images/github.svg"
            alt="github icon"
          />
        </a>
        <a
          href="mailto:mirabror.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="networks">@</span>
        </a>
      </div>
      <div>This is a simple movie info website.</div>
    </footer>
  );
}
