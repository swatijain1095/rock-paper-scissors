import React from "react";
import "./style.scss";

interface ShowWinnerProps {
  winner: number;
}

const ShowWinner: React.FC<ShowWinnerProps> = ({ winner = 0 }) => {
  const text: { [key: number]: string } = {
    0: "It's a Tie",
    [-1]: "You Win!",
    1: "You Lose!",
  };

  return <h2 className="show-winner">{text[winner]}</h2>;
};

export default ShowWinner;
