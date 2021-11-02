import { useQuiz } from "../context/Quizcontext";
import { useNavigate } from "react-router-dom";
export function Endpage() {
  const { name, state, highscore, quizdispatch, setHighscore } = useQuiz();
  const scoreobject = { id: Date.now(), name: name, score: state.currentscore };
  const navigate = useNavigate();
  const newarray = [...highscore, scoreobject];
  function clickhandler() {
    quizdispatch({ type: "reset" });
    localStorage.setItem("highscore", JSON.stringify(newarray));
    setHighscore([...highscore, scoreobject]);
    quizdispatch({ type: "reset" });
    navigate("/");
  }
  return (
    <div className="display-flex flex-column justify-content-center align-items-center vh-100 gap-1rem">
      <h1>name&nbsp;:&nbsp;{name}</h1>
      <h2>score&nbsp;:&nbsp;{state.currentscore}</h2>
      <button
        className=" button-active padding_0_5rem border-radius-1rem font-size-large border-none"
        onClick={clickhandler}
      >
        play again
      </button>
    </div>
  );
}
