import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/Quizcontext";

export function Frontpage() {
  const { name, setName, highscore, setHighscore } = useQuiz();
  const navigate = useNavigate();

  const tablearray = [
    ...[...highscore].sort((a, b) => b.score - a.score),
  ].slice(0, 3);

  function submit(event: any) {
    event.preventDefault();
    console.log({ name });
    navigate("/quiz");
  }
  return (
    <div className="margin-horizont vh-100 display-grid grid-template-rows-1fr-8fr">
      <div
        style={{
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        <h1>Capital Quiz &#128681;</h1>
      </div>
      <div className="display-flex flex-column gap-1rem align-items-center justify-content-center">
        <form className="display-flex gap-1rem" onSubmit={submit}>
          <input
            value={name}
            className="border-radius-1rem padding_0_5rem font-size-large text-align-center"
            onChange={(event) => setName(event.target.value)}
            placeholder="enter your name"
          />

          <button
            className={
              name.length > 0
                ? "button-active padding_0_5rem border-radius-1rem font-size-large border-none"
                : "button-disabled padding_0_5rem border-radius-1rem font-size-large border-none"
            }
            type="submit"
            disabled={name.length > 0 ? false : true}
          >
            play
          </button>
        </form>

        {tablearray.length > 0 && (
          <div className="display-flex flex-column gap-1rem align-self-center">
            <div>
              <h3 className="text-align-center">highscore</h3>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {tablearray.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button
              className="button-active padding_0_5rem border-radius-1rem font-size-large border-none"
              onClick={() => {
                localStorage.removeItem("highscore");
                setHighscore([]);
              }}
            >
              clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
