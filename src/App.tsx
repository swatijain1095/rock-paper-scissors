import Player from "./components/Player/Player";
import ActionButton from "./components/ActionButton/ActionButton";
import ShowWinner from "./components/ShowWinner/ShowWinner";
import { useState } from "react";

// export interface ActionsI {
//   action: "rock" | "paper" | "scissors";
// }

export type ActionsI = "rock" | "paper" | "scissors" | "";
// export const actions = {
//   rock: ["scissors"],
//   paper: ["rock"],
//   scissors: ["paper"],
// };
export const actions: Record<Exclude<ActionsI, "">, ActionsI[]> = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"],
};

// export const randomAction = () => {
//   const keys = Object.keys(actions) as ActionsI[];
//   const index = Math.floor(Math.random() * keys.length);
//   return keys[index];
// };
export const randomAction = (): ActionsI => {
  const keys = Object.keys(actions) as Exclude<ActionsI, "">[];
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
};

export const calculateWinner = (action1: ActionsI, action2: ActionsI) => {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1 as Exclude<ActionsI, "">]?.includes(action2)) {
    return -1;
  } else if (actions[action2 as Exclude<ActionsI, "">]?.includes(action1)) {
    return 1;
  }
  return 0;
};

function App() {
  const [playerAction, setPlayerAction] = useState<ActionsI>("");
  const [computerAction, setComputerAction] = useState<ActionsI>("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction: ActionsI) => {
    const newComputerAction = randomAction();
    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-container__header">Rock Paper Scissors</h1>
      <div>
        <div className="app-container__player">
          <Player name="Player" score={1} action={playerAction} />
          <Player name="Computer" score={0} action={computerAction} />
        </div>
        <div className="app-container__action">
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <ShowWinner winner={winner} />
      </div>
    </div>
  );
}

export default App;
