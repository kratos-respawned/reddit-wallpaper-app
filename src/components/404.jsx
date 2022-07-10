import { useNavigate } from "react-router-dom";
import "../css/style.css";
export default function F404() {
  const navigate = useNavigate();
  return (
    <div className="f404">
      <center>
        <h1>404 Page Not Found</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </center>
    </div>
  );
}
