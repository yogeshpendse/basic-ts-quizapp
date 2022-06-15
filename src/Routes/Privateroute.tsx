import { Navigate, useLocation } from "react-router";
import { useQuiz } from "../context/Quizcontext";

export function Privateroute({ children }: any) {
  const { name } = useQuiz();
  const location = useLocation();
  const loginstatus = name.length > 0 ? true : false;
  if (!loginstatus) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
