import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/Quizcontext";
import {
  Finalquizarrayanswers,
  Finalquizarrayitems,
  Quizanswers,
} from "../Types/Quiztypes";

export function Quizsection(params: any) {
  const { finalarray } = params;
  const navigate = useNavigate();
  const finalarrayindex: number = finalarray.length - 1;
  const { quizdispatch, state } = useQuiz();
  const [quizstate, setQuizstate] = useState<number>(0);
  const currentquiz: Finalquizarrayitems = finalarray[quizstate];
  const currentques: string = currentquiz?.question;
  const currentans: Finalquizarrayanswers = currentquiz?.answers || [];
  const [selection, setSelection] = useState<Quizanswers | null>(null);
  function handlenext(params: any) {
    const {
      selection,
      quizdispatch,
      finalarrayindex,
      quizstate,
      setQuizstate,
      setSelection,
    } = params;
    if (selection?.iscorrect) {
      quizdispatch({ type: "increment" });
    }
    if (!selection?.iscorrect) {
      quizdispatch({ type: "decrement" });
    }
    setSelection(null);
    if (finalarrayindex !== quizstate) {
      setQuizstate(quizstate + 1);
    }
  }
  function handlesubmit(params: any) {
    const { selection, quizdispatch, navigate } = params;
    if (selection?.iscorrect) {
      quizdispatch({ type: "increment" });
    }
    if (!selection?.iscorrect) {
      quizdispatch({ type: "decrement" });
    }
    navigate("/final");
  }
  return (
    <div className="quizsection">
      <div className="quizsection__container">
        <p className="quizsection__currentscore">
          <span>score:</span>
          <span>{state?.currentscore}</span>
        </p>
        <h2 className="quizsection__question">{currentques}</h2>
        {currentans.length > 0 && (
          <>
            {currentans.map((item: Quizanswers) => {
              return (
                <div key={item?.id}>
                  <h3
                    className={
                      selection?.id === item.id
                        ? "quizsection__option quizsection__option--selected"
                        : "quizsection__option"
                    }
                    onClick={() => setSelection(item)}
                  >
                    {item?.answer}
                  </h3>
                </div>
              );
            })}
          </>
        )}

        {finalarrayindex !== quizstate ? (
          <button
            onClick={() =>
              handlenext({
                selection,
                quizdispatch,
                finalarrayindex,
                quizstate,
                setQuizstate,
                setSelection,
              })
            }
            disabled={selection === null ? true : false}
            className={
              selection === null
                ? "quizsection__button quizsection__button--disaled"
                : "quizsection__button quizsection__button--primary"
            }
          >
            next
          </button>
        ) : (
          <button
            onClick={() => handlesubmit({ selection, quizdispatch, navigate })}
            disabled={selection === null ? true : false}
            className={
              selection === null
                ? "quizsection__button quizsection__button--disaled"
                : "quizsection__button quizsection__button--primary"
            }
          >
            finish
          </button>
        )}
      </div>
      {/* finalarrayindex */}
      {/* <h3>Your final score is {state?.currentscore}</h3> */}
    </div>
  );
}
