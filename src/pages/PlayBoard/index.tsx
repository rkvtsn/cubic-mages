import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayBoardWrapperStyled } from "./styles";

import WorldModel from "types/WorldModel";
import { REAL_WORLD } from "pages/Editor/constants";

const PlayBoard = () => {
  const { id: worldId } = useParams<{ id?: string }>();
  const [worldMap, setWorldMap] = useState<WorldModel>(REAL_WORLD);

  useEffect(() => {}, [worldId]);

  return (
    <PlayBoardWrapperStyled>
      <div>
        <button value={""} name=""></button>
      </div>
      <div>{/* <WorldMap worldMap={worldMap} /> */}</div>
    </PlayBoardWrapperStyled>
  );
};

export default PlayBoard;
