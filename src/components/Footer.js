import github from "../images/github.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script>
      </div>
      <div>
        Links:
        <a
          href="https://github.com/mirsadikov"
          target="_blank"
          rel="noreferrer"
        >
          <img className="networks" src={github} alt="github icon" />
        </a>
        <a
          href="mailto:mirabrorsadikov@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="networks">@</span>
        </a>
      </div>
      <div>This is a simple movie info website.</div>
    </footer>
  );
};

export default Footer;
