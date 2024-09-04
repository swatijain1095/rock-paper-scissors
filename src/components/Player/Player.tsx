import { ActionsI } from "../../App";
import ActionIcon from "../ActionIcon/ActionIcon";
import "./style.scss";

interface PlayerProps {
  name: string;
  score: number;
  action: ActionsI;
}

const Player = ({
  name = "Player",
  score = 0,
  action = "rock",
}: PlayerProps) => {
  return (
    <div className="player">
      <div className="player__name">{`${name} : ${score}`}</div>
      <div className="player__action">
        {action && <ActionIcon action={action} size={80} />}
      </div>
    </div>
  );
};

export default Player;
