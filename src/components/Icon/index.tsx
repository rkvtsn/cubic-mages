import { Icons } from "constants/icons";

interface IconProps {
  icon: Icons;
}

const Icon = ({ icon }: IconProps) => {
  return <i className={`icon icon-${icon}`}></i>;
};

export default Icon;
