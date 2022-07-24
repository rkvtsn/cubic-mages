import Icon from "components/Icon";
import { InfoModel } from "types/InfoModel";
import { InfoCellWrapperStyled } from "./styles";

interface InfoCellProps {
  info: InfoModel;
}

const InfoCell = ({ info }: InfoCellProps) => {
  return (
    <InfoCellWrapperStyled>
      <Icon icon={info.icon} />
    </InfoCellWrapperStyled>
  );
};

export default InfoCell;
