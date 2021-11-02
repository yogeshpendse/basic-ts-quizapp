import { createContext, useContext, useReducer, useState } from "react";
import { quizreducer } from "../reducers/quizreducer";
import { Tcontext, Highsoretype } from "./Quizcontext.types";
const Quizcontext = createContext({} as Tcontext);

export function Quizprovider({ children }: any) {
  const ko: string = localStorage.getItem("highscore") || "[]";
  const gethighscore: Highsoretype = JSON.parse(ko);
  const initialstate = { currentscore: 0 };
  const [state, quizdispatch] = useReducer(quizreducer, initialstate);
  const [highscore, setHighscore] = useState(gethighscore);
  const [name, setName] = useState("");
  return (
    <Quizcontext.Provider
      value={{ state, quizdispatch, highscore, setHighscore, name, setName }}
    >
      {children}
    </Quizcontext.Provider>
  );
}
export const useQuiz = () => useContext(Quizcontext);
