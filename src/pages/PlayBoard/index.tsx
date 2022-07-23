import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import WorldModel from "types/WorldModel";
import { REAL_WORLD } from "pages/Editor/constants";
import MainLayout from "components/MainLayout";
import WorldMap from "components/WorldMap";
import { loadFromLocalStorage } from "utils/localStorage";
import { PlayerModel, PlayerType } from "types/PlayerModel";
import { CURRENT_WORLD } from "constants/general";
import { ColorPlayer } from "constants/colors";

// @todo change to require startlocations
// simple version
const initGame =
  (players: PlayerModel[]) =>
  (
    worldId: string | undefined,
    setWorldMap: (value: React.SetStateAction<WorldModel>) => void
  ) => {
    if (worldId) {
      const world = loadFromLocalStorage(worldId, REAL_WORLD);
      for (const player of players) {
        world.world = world.world.map((cell) => {
          if (player.type === cell.cell.playerTypeStartLocation) {
            return { ...cell, playerId: player.id };
          }
          return cell;
        });
      }
      world.world = world.world.map((cell) => {
        // const player = { ...players[playersCounter - 1] };
        // console.log({ playersCounter, player });
        // if (
        //   cell.cell.playerTypeStartLocation === player.type &&
        //   playersCounter >= 0
        // ) {
        //   playersCounter--;
        //   console.log("here");
        //   return { ...cell, player };
        // }
        return cell;
      });
      setWorldMap(world);
    }
  };

// const initPlayBoard = initGame(PLAYERS);

// @todo
const addRumors = () => {};

// @todo add service to change World
const addEncounters = (
  setWorldMap: (value: React.SetStateAction<WorldModel>) => void
) => {
  setWorldMap((oldWorld) => {
    const newWorld = [...oldWorld.world];
    return {
      id: oldWorld.id,
      name: oldWorld.name,
      world: newWorld,
    };
  });
};

const WORLD = loadFromLocalStorage<WorldModel>(CURRENT_WORLD, REAL_WORLD);

const PLAYERS: PlayerModel[] = [
  {
    id: "1",
    color: ColorPlayer.Blue,
    type: PlayerType.Druid,
    name: "Player 1",
  },
];

const initPlayBoard = initGame(PLAYERS);

const PlayBoard = () => {
  const { id: worldId } = useParams<{ id: string }>();
  const [worldMap, setWorldMap] = useState<WorldModel>(WORLD);

  useEffect(() => {
    initPlayBoard(worldId, setWorldMap);
  }, [worldId]);

  const handleCellClick = useCallback(() => {}, []);

  const handleNewDay = useCallback(() => {
    addEncounters(setWorldMap);
  }, []);

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
