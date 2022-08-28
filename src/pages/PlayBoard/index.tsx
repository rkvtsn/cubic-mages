import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import EffectModel from "types/EffectModel";
import PlayerTable from "./PlayerTable";
import CharactersContainer from "constants/characters";
import { ICharacterService } from "services/CharacterService";
import CellModel from "types/CellModel";

const initGame =
  (players: PlayerModel[]) =>
  (
    worldId: string | undefined,
    setWorldMap: (value: React.SetStateAction<WorldModel>) => void
  ) => {
    if (worldId) {
      let world = loadFromLocalStorage(worldId, REAL_WORLD);

      setWorldMap(world);
    }
  };

const WORLD = loadFromLocalStorage<WorldModel>(CURRENT_WORLD, REAL_WORLD);

const INPUTED_PLAYERS: PlayerModel[] = [
  {
    id: "1",
    color: ColorPlayer.Blue,
    characterType: CharacterType.Druid,
    name: "Player 1",
  },
];

interface PlayBoardProps {
  gamers?: PlayerModel[];
}

const characters: Record<string, ICharacterService> = {};

const useGame = (inputedPlayers: PlayerModel[], worldCells: CellModel[]) => {
  const [players, setPlayers] = useState<PlayerModel[]>(inputedPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);

  const nextPlayer = useCallback(() => {
    setCurrentPlayerIndex((i) => {
      return i < players.length ? i++ : 0;
    });
  }, [players?.length]);

  const currentPlayer = useMemo(() => {
    return players[currentPlayerIndex];
  }, [currentPlayerIndex, players]);

  const refreshPlayers = useCallback(() => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        return characters[player.id].getPlayer();
      });
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < inputedPlayers.length; i++) {
      const player = inputedPlayers[i];
      const character = CharactersContainer[player.characterType]({
        ...player,
      });
      if (i === 0) {
        character.setActive(true);
      }
      characters[player.id] = character;
      character.spawnPlayer(worldCells);
    }
    refreshPlayers();
  }, [inputedPlayers, refreshPlayers, worldCells]);

  return {
    currentPlayer,
    players,
    setPlayers,
    nextPlayer,
    refreshPlayers,
  };
};

const PlayBoard = ({ gamers = INPUTED_PLAYERS }: PlayBoardProps) => {
  const { id: worldId } = useParams<{ id: string }>();
  const [worldMap, setWorldMap] = useState<WorldModel>(WORLD);
  const [effects, setEffects] = useState<EffectModel[]>([]);

  const { currentPlayer, nextPlayer, players } = useGame(
    gamers,
    worldMap.cells
  );

  const handleCellClick = useCallback(
    (
      tileId: number,
      cellId: number,
      e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {},
    []
  );

  const handleNewDay = useCallback(() => {
    nextPlayer();
  }, [nextPlayer]);

  console.log({ players });

  return (
    <MainLayout
      header={<button onClick={handleNewDay}>New day</button>}
      rightbar={<PlayerTable player={currentPlayer} />}
    >
      <WorldMap
        effects={effects}
        players={players}
        worldMap={worldMap}
        onClick={handleCellClick}
      />
    </MainLayout>
  );
};

export default PlayBoard;
