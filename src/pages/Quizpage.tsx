import { useState } from "react";
import { useQuiz } from "../context/Quizcontext";
import { useNavigate } from "react-router-dom";
import { QuizDb } from "../QuizDb";
import { Option } from "../types/QuizDb.types";
export function Quizpage() {
  let navigate = useNavigate();
  const [state, setState] = useState<Option | null>(null);
  const noofquestions: number = QuizDb.questionaraay.length;
  const [questionno, setQuestionno] = useState<number>(0);
  const wues = QuizDb.questionaraay[questionno];
  const { state: quizstate, quizdispatch } = useQuiz();

  function submit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (state?.iscorrect) {
      quizdispatch({ type: "increment" });
      setState(null);
      if (questionno !== noofquestions) {
        setQuestionno(questionno + 1);
        if (questionno + 1 === noofquestions) {
          return navigate("/end");
        }
      }
    } else {
      quizdispatch({ type: "decrement" });
      setState(null);
      if (questionno !== noofquestions - 1) {
        setQuestionno(questionno + 1);
      } else {
        console.log("navigate");
        return navigate("/end");
      }
    }
  }

  return (
    <>
      <div className="question-container">
        <form onSubmit={submit} className="question">
          <div className="quiz-header">
            <p>
              question : {questionno + 1}/{noofquestions}
            </p>
            <p>score : {quizstate.currentscore}</p>
          </div>
          <div>
            <h3>{wues.question}</h3>
          </div>
          <div className="answers">
            {wues.options.map((x) => (
              <div key={x.opid} className="answer">
                <input
                  onChange={(event) => setState(JSON.parse(event.target.value))}
                  type="radio"
                  checked={state?.opid === x.opid ? true : false}
                  value={JSON.stringify(x)}
                />
                <label>{x.option}</label>
              </div>
            ))}
          </div>

          {questionno !== noofquestions - 1 ? (
            <button
              type="submit"
              className={
                state === null
                  ? "submit-button button-disabled"
                  : "submit-button button-active"
              }
              disabled={state === null ? true : false}
            >
              next
            </button>
          ) : (
            <button
              type="submit"
              className={
                state === null
                  ? "submit-button button-disabled"
                  : "submit-button button-active"
              }
              disabled={state === null ? true : false}
            >
              done
            </button>
          )}
        </form>
      </div>
    </>
  );
}
