import spinSVG from "../img/spinner.svg";
export default function Spinner() {
  return (
    <div className="fullPage">
      <img src={spinSVG} alt="loading..." className="loader" />
    </div>
  );
}
