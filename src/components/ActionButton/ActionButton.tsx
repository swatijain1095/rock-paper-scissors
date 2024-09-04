import React from "react";
import ActionIcon from "../ActionIcon/ActionIcon";
import { ActionsI } from "../../App";
import "./style.scss";

interface ActionButtonProps {
  action: ActionsI;
  onActionSelected: (action: ActionsI) => void;
}

const ActionButton = ({
  action = "rock",
  onActionSelected,
}: ActionButtonProps) => {
  return (
    <button className="action-btn" onClick={() => onActionSelected(action)}>
      <ActionIcon action={action} size={40} />
    </button>
  );
};

export default ActionButton;
