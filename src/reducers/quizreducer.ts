import { ACTIONTYPE, Datatype } from "../context/Quizcontext.types";
export function quizreducer(state: Datatype, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { currentscore: state.currentscore + 4 };
    case "decrement":
      return { currentscore: state.currentscore - 1 };
    case "reset":
      return { currentscore: 0 };
    default:
      throw new Error();
  }
}
