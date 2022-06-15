import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../context/Quizcontext";

export function Finalpage() {
  const { state, name, highscore, setHighscore, quizdispatch } = useQuiz();
  const scoreobject = { id: Date.now(), name: name, score: state.currentscore };
  const navigate = useNavigate();
  const newarray = [...highscore, scoreobject];
  function clickhandler(params: any) {
    const { quizdispatch, setHighscore, navigate, newarray } = params;
    quizdispatch({ type: "reset" });
    localStorage.setItem("highscore", JSON.stringify(newarray));
    setHighscore([...newarray]);
    quizdispatch({ type: "reset" });
    navigate("/");
  }
  return (
    <div className="finalpage">
      <div className="finalpage__section">
        <p className="finalpage__message">
          {name} your score is {state?.currentscore}.
        </p>
        <button
          className="finalpage__button finalpage__button--primary"
          onClick={() =>
            clickhandler({ quizdispatch, setHighscore, navigate, newarray })
          }
        >
          Save
        </button>
        <button
          className="finalpage__button finalpage__button--link"
          onClick={() => {
            clickhandler({ quizdispatch, setHighscore, navigate, newarray });
            navigate("/highscore");
          }}
        >
          show highscore
        </button>
        <Link className="finalpage__button finalpage__button--link" to="/">
          home
        </Link>
      </div>
    </div>
  );
}
