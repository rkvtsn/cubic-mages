import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import EffectModel from "types/EffectModel";
import { InfoModel } from "types/InfoModel";
import { PlayerModel } from "types/PlayerModel";
import InfoCell from "./InfoCell";
import PlayerCell from "./PlayerCell";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

const TileCell = ({
  onClick,
  cellBase,
  isSelected = false,
  isStatic = false,
  className,
  effects,
  players,
  info,
}: TileCellProps) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClick(cellBase.name, e);
    },
    [cellBase, onClick]
  );

  const styles = useCellStyle(cellBase, isSelected, isStatic);

  return (
    <TileCellStyled className={className} {...styles} onClick={handleOnClick}>
      {/* {info ? <InfoCell info={info} /> : null} */}
      {/* {effect ? <EffectCell effect={effect} /> : null} */}
      {!!players &&
        players.map((player) => <PlayerCell key={player.id} player={player} />)}
    </TileCellStyled>
  );
};

export interface TileCellProps {
  onClick: (cellName: string, e: React.MouseEvent<HTMLElement>) => void;
  cellBase: CellBaseModel;
  isSelected?: boolean;
  isStatic?: boolean;
  className?: string;
  effects?: EffectModel[];
  players?: PlayerModel[];
  info?: InfoModel | null;
}

export default memo(TileCell);
