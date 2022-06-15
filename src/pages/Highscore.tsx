import { useQuiz } from "../context/Quizcontext";
import { Link } from "react-router-dom";

export function Highscore() {
  const { highscore, setHighscore } = useQuiz();
  return (
    <div className="highscore">
      <div className="highscore__container">
        {highscore.length > 0 && (
          <div className="highscore__table">
            <table className="table">
              <thead className="table-primary-head">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">First</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {[...highscore].map((item, id) => {
                  return (
                    <tr key={id}>
                      <th className="table-secondary" scope="row">
                        {id + 1}
                      </th>
                      <td className="table-secondary">{item.name}</td>
                      <td className="table-secondary">{item.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {highscore.length === 0 && <h2>No highscore available.</h2>}
        <div className="highscore__buttons">
          <Link className="highscore__button" to="/">
            go home
          </Link>
          <button
            className="highscore__button"
            onClick={() => {
              setHighscore([]);
              localStorage.setItem("highscore", JSON.stringify([]));
            }}
          >
            clear highscore
          </button>
        </div>
      </div>
    </div>
  );
}
