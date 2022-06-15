import axios from "axios";
import { useEffect, useState } from "react";
import { modifyarray } from "../functions/arraymodifications";
import { Finalquizarray, Quizarray } from "../Types/Quiztypes";
import { Quizsection } from "../component/Quizsection";

export function Quizpage() {
  const [qarray, setQarray] = useState<Quizarray | []>([]);
  const finalarray: Finalquizarray | [] = modifyarray(qarray);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    (async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      try {
        setIsloading(true);
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple",
          {
            signal,
          }
        );
        setIsloading(false);
        setQarray(response.data.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // do nothing
        }
        if (!axios.isAxiosError(error)) {
          console.log("some eroor occured");
        }
      }
    })();
    return () => {};
  }, []);

  return (
    <div>
      {isloading ? (
        <div className="spinner-container">
          <div className="spinner-border text-primary spinner-height" />
        </div>
      ) : (
        <Quizsection finalarray={finalarray} />
      )}
    </div>
  );
}
