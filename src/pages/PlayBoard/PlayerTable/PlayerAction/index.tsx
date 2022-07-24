import { ActionModel } from "types/ActionModel";

interface PlayerActionProps {
  action: ActionModel;
}

const PlayerAction = ({ action }: PlayerActionProps) => {
  return <div>PlayerAction</div>;
};

export default PlayerAction;
