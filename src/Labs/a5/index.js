import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const LAB_BASE = process.env.REACT_APP_LAB_BASE;
  const URL = `${LAB_BASE}`;
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${URL}/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
