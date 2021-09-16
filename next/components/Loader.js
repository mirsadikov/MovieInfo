import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <>
      <div id="emptySpace"></div>
      <div id="loadinggg">
        <Spinner
          id="spinner"
          animation="border"
          role="status"
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block",
          }}
        ></Spinner>
      </div>
    </>
  );
}
