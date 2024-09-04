import React from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { ActionsI } from "../../App";
import { IconType } from "react-icons";

interface ActionIconProps {
  action: ActionsI;
  size: number;
}

const ActionIcon = ({ action, size }: ActionIconProps) => {
  const icons: Record<ActionsI, IconType | null> = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
    "": null,
  };

  const Icon = icons[action];
  return Icon ? <Icon size={size} /> : null;
};

export default ActionIcon;
