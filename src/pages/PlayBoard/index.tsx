import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import WorldModel from "types/WorldModel";
import { REAL_WORLD } from "pages/Editor/constants";
import MainLayout from "components/MainLayout";
import WorldMap from "components/WorldMap";
import { loadFromLocalStorage } from "utils/localStorage";

const PlayBoard = () => {
  const { id: worldId } = useParams<{ id: string }>();
  const [worldMap, setWorldMap] = useState<WorldModel>(REAL_WORLD);

  useEffect(() => {
    if (worldId) {
      setWorldMap(loadFromLocalStorage(worldId, REAL_WORLD));
    }
  }, [worldId]);

  const handleCellClick = useCallback(() => {}, []);
  const handleNewDay = useCallback(() => {}, []);

  return (
    <MainLayout
      header={
        <>
          <button onClick={handleNewDay}>New day</button>
        </>
      }
    >
      <WorldMap worldMap={worldMap} onClick={handleCellClick} />
    </MainLayout>
  );
};

export default PlayBoard;
