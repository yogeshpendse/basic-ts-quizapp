import * as React from "react";
const anyval: Tcontext | any = {};
const Quizcontext = React.createContext(anyval);
export function Quizprovider({ children }: any) {
  const initialstate: Datatype = { currentscore: 0 };
  function quizreducer(state: Datatype, action: ACTIONTYPE) {
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
  const [state, quizdispatch] = React.useReducer(quizreducer, initialstate);
  const ko: string = localStorage.getItem("highscore") || "[]";
  const gethighscore: Highsoretype = JSON.parse(ko);
  const [highscore, setHighscore] = React.useState(gethighscore);
  const [name, setName] = React.useState("");
  const valtobepassed: Tcontext = {
    state,
    quizdispatch,
    highscore,
    setHighscore,
    name,
    setName,
  };
  return (
    <Quizcontext.Provider value={valtobepassed}>
      {children}
    </Quizcontext.Provider>
  );
}
export const useQuiz = () => React.useContext(Quizcontext);
export type ACTIONTYPE =
  | {
      type: "increment";
      payload?: string;
    }
  | {
      type: "decrement";
      payload?: string;
    }
  | {
      type: "reset";
      payload?: string;
    };
export type Highsoreitem = { id: number; name: string; score: number };
export type Highsoretype = Highsoreitem[];
export type Datatype = { currentscore: number };
export type Tcontext = {
  state: { currentscore: number };
  quizdispatch: React.Dispatch<ACTIONTYPE>;
  highscore: Highsoretype;
  setHighscore: React.Dispatch<React.SetStateAction<Highsoretype>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};
