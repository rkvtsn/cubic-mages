import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import WorldModel from "types/WorldModel";
import { REAL_WORLD } from "pages/Editor/constants";
import MainLayout from "components/MainLayout";
import WorldMap from "components/WorldMap";
import { loadFromLocalStorage } from "utils/localStorage";
import { PlayerModel } from "types/PlayerModel";
import { CURRENT_WORLD } from "constants/general";
import { ColorPlayer } from "constants/colors";
import { CharacterType } from "types/CharacterModel";
import CHARACTERS from "constants/characters";
import PlayerTable from "./PlayerTable";
import { DEFAULT_BAG } from "constants/cubics";

// PLAYERS loading from localstorage/server
const PLAYERS: PlayerModel[] = [
  {
    id: "1",
    color: ColorPlayer.Blue,
    type: CharacterType.Druid,
    name: "Player 1",
    bag: [...DEFAULT_BAG],
    actions: [],
  },
];

// @todo add service to change World

const initGame =
  (players: PlayerModel[]) =>
  (
    worldId: string | undefined,
    setWorldMap: (value: React.SetStateAction<WorldModel>) => void
  ) => {
    if (worldId) {
      const world = loadFromLocalStorage(worldId, REAL_WORLD);
      for (const player of players) {
        for (const cell of world.world) {
          if (
            !cell.player &&
            CHARACTERS[player.type].startLocation === cell.cellName
          ) {
            // @todo... ref access ?!
            cell.player = player;
            break;
          }
        }
      }
      setWorldMap(world);
    }
  };

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

const initPlayBoard = initGame(PLAYERS);

const PlayBoard = () => {
  const { id: worldId } = useParams<{ id: string }>();
  const [worldMap, setWorldMap] = useState<WorldModel>(WORLD);
  const [players, setPlayers] = useState<PlayerModel[]>(PLAYERS);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);

  const currentPlayer = useMemo(() => {
    return players[currentPlayerIndex];
  }, [currentPlayerIndex, players]);

  useEffect(() => {
    initPlayBoard(worldId, setWorldMap);
  }, [worldId]);

  const handleCellClick = useCallback(
    (
      tileId: number,
      cellId: number,
      e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
      setWorldMap((oldWorld) => {
        return {
          id: oldWorld.id,
          name: oldWorld.name,
          world: oldWorld.world.map((oldCell) => {
            if (oldCell.id === cellId) {
              return { ...oldCell, player: currentPlayer };
            }
            return { ...oldCell, player: null };
          }),
        };
      });
    },
    [currentPlayer]
  );

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
      rightbar={<PlayerTable player={currentPlayer} />}
    >
      <WorldMap worldMap={worldMap} onClick={handleCellClick} />
    </MainLayout>
  );
};

export default PlayBoard;
