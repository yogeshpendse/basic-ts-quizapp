import { Navigate, Route } from "react-router-dom";
import { useQuiz } from "../../context/Quizcontext";

export function Privateroute(params: any) {
  const { name } = useQuiz();
  const { path, element } = params;
  const pokpok = name.length > 0 ? "true" : "false";
  console.log({ pokpok });
  return name.length > 0 ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
}
