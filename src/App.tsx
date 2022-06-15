import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Finalpage } from "./pages/Finalpage";
import { Firstpage } from "./pages/Firstpage";
import { Quizpage } from "./pages/Quizpage";
import { Highscore } from "./pages/Highscore";
import { Privateroute } from "./Routes/Privateroute";
export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route
          path="/quiz"
          element={
            <Privateroute>
              <Quizpage />
            </Privateroute>
          }
        />
        <Route
          path="/final"
          element={
            <Privateroute>
              <Finalpage />
            </Privateroute>
          }
        />
        <Route path="/highscore" element={<Highscore />} />
      </Routes>
    </div>
  );
}

export default App;
