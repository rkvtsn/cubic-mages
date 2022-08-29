import { memo } from "react";
import EFFECTS from "constants/effects";
import EffectModel from "types/EffectModel";
import { EffectCellWrapperStyled } from "./styles";

interface EffectCellProps {
  effect: EffectModel;
}

const EffectCell = ({ effect }: EffectCellProps) => {
  const symbol = EFFECTS[effect.type].symbol;
  return (
    <EffectCellWrapperStyled title={effect.payload.text}>
      {symbol}
    </EffectCellWrapperStyled>
  );
};

export default memo(EffectCell);
