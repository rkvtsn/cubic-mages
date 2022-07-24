import { CubicModel } from "types/CubicModel";

interface CubicProps {
  cubic: CubicModel;
}

const Cubic = ({ cubic }: CubicProps) => {
  return <div>{cubic.type}</div>;
};

export default Cubic;
