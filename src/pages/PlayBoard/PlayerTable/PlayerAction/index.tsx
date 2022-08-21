import { SkillModel } from "types/SkillModel";

interface PlayerActionProps {
  action: SkillModel;
}

const PlayerAction = ({ action }: PlayerActionProps) => {
  return <div>PlayerAction</div>;
};

export default PlayerAction;
