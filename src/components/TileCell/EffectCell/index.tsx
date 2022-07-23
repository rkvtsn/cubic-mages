import EFFECTS from "constants/effects";
import { memo } from "react";
import EffectModel from "types/EffectModel";
import { EffectCellWrapperStyled } from "./styles";

interface EffectCellProps {
  effect: EffectModel;
}

const EffectCell = ({ effect }: EffectCellProps) => {
  return (
    <EffectCellWrapperStyled title={effect.name}>
      {EFFECTS[effect.type].symbol}
    </EffectCellWrapperStyled>
  );
};

export default memo(EffectCell);
