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
