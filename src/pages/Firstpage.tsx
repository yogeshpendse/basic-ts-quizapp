import { useQuiz } from "../context/Quizcontext";
import { Link, useNavigate } from "react-router-dom";
export function Firstpage() {
  const { name, setName, quizdispatch } = useQuiz();
  const navigate = useNavigate();
  return (
    <div className="firstpage">
      <div className="firstpage__container">
        <h1 className="firstpage__header">Sports+ Quiz</h1>
        <input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
          className="firstpage__input"
        />
        <button
          onClick={() => {
            if (name.length > 0) {
              navigate("/quiz");
              quizdispatch({ type: "reset" });
            }
          }}
          disabled={name.length < 1 ? true : false}
          className={
            name.length < 1
              ? "firstpage__button firstpage__button--disabled"
              : "firstpage__button firstpage__button--active"
          }
        >
          <span>play</span>
        </button>
        <Link className="firstpage__link" to="/highscore">
          see highscores
        </Link>
      </div>
    </div>
  );
}
