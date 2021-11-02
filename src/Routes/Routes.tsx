import { Route, Routes } from "react-router-dom";
import { Endpage } from "../pages/Endpage";
import { Frontpage } from "../pages/Frontpage";
import { Quizpage } from "../pages/Quizpage";
import { Privateroute } from "./Privaterolute/Privaterolute";
export function Travelroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Privateroute path="/quiz" element={<Quizpage />} />
        <Privateroute path="/end" element={<Endpage />} />
      </Routes>
    </>
  );
}
