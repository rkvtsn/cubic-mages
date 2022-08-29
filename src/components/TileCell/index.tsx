import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import EffectModel from "types/EffectModel";
import { InfoModel } from "types/InfoModel";
import { PlayerModel } from "types/PlayerModel";
import PlayerCell from "./PlayerCell";
import useCellStyle from "./useCellStyle";
import { EffectsStyled, PlayersStyled, TileCellStyled } from "./styles";
import EffectCell from "./EffectCell";

const TileCell = ({
  onClick,
  cellBase,
  isSelected = false,
  isStatic = false,
  className,
  effects,
  players,
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
      {!!effects && (
        <EffectsStyled>
          {effects.map((effect) => (
            <EffectCell key={effect.cell?.id} effect={effect} />
          ))}
        </EffectsStyled>
      )}
      {!!players && (
        <PlayersStyled>
          {players.map((player) => (
            <PlayerCell key={player.id} player={player} />
          ))}
        </PlayersStyled>
      )}
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
}

export default memo(TileCell);
