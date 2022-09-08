import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";

import WorldModel from "types/WorldModel";
import { REAL_WORLD } from "pages/Editor/constants";
import MainLayout from "components/MainLayout";
import WorldMap from "components/WorldMap";
import { loadFromLocalStorage } from "utils/localStorage";
import { PlayerModel } from "types/PlayerModel";
import { DEFAULT_WORLD } from "constants/general";
import { ColorPlayer } from "constants/colors";
import { CharacterType } from "types/CharacterModel";
import EffectModel from "types/EffectModel";
import PlayerTable from "./PlayerTable";
import CharactersContainer from "constants/characters";
import { ICharacterService } from "services/CharacterService";
import CellModel from "types/CellModel";

const WORLD = loadFromLocalStorage<WorldModel>(DEFAULT_WORLD, REAL_WORLD);

const INPUTED_PLAYERS: PlayerModel[] = [
  {
    id: "1",
    color: ColorPlayer.Blue,
    characterType: CharacterType.Druid,
    name: "Test Player Druid 11",
  },
  {
    id: "2",
    color: ColorPlayer.Green,
    characterType: CharacterType.Druid,
    name: "Test Player Druid 22",
  },
];

interface PlayBoardProps {
  gamers?: PlayerModel[];
}

// const characters: Record<string, ICharacterService> = {};

const useGame = (inputedPlayers: PlayerModel[], worldCells: CellModel[]) => {
  const [players, setPlayers] = useState<PlayerModel[]>(inputedPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const characters = useRef<Record<string, ICharacterService>>({});

  const nextPlayer = useCallback(() => {
    setCurrentPlayerIndex((i) => {
      return i < players.length - 1 ? i + 1 : 0;
    });
  }, [players?.length]);

  const currentCharacter = useMemo(() => {
    return characters.current[players[currentPlayerIndex].id];
  }, [players, currentPlayerIndex]);

  const refreshPlayers = useCallback(() => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        return characters.current[player.id].getPlayer();
      });
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < inputedPlayers.length; i++) {
      const player = inputedPlayers[i];
      const character = CharactersContainer[player.characterType](
        {
          ...player,
        },
        worldCells
      );
      characters.current[player.id] = character;
    }
    refreshPlayers();
  }, [inputedPlayers, refreshPlayers, worldCells]);

  return {
    currentCharacter,
    players,
    setPlayers,
    nextPlayer,
    refreshPlayers,
    characters,
  };
};

const PlayBoard = ({ gamers = INPUTED_PLAYERS }: PlayBoardProps) => {
  const { id: worldId } = useParams<{ id: string }>();
  const [worldMap, setWorldMap] = useState<WorldModel>(WORLD);
  const [effects, setEffects] = useState<EffectModel[]>([]);

  useEffect(() => {
    if (worldId) {
      let world = loadFromLocalStorage(worldId, REAL_WORLD);

      setWorldMap(world);
    }
  }, [worldId]);

  const { currentCharacter, nextPlayer, players } = useGame(
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

  const handleShowAvailableLocations = useCallback(() => {}, []);

  return (
    <MainLayout
      header={<button onClick={handleNewDay}>New day</button>}
      rightbar={
        <PlayerTable
          onShowAvailableLocations={handleShowAvailableLocations}
          character={currentCharacter}
        />
      }
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
