import Modal from "components/Modal";
import useLocalStorageState from "hooks/useLocalStorageState";
import usePanelClickButton from "hooks/usePanelClickButton";
import { useCallback, useState } from "react";
import WorldModel from "types/WorldModel";
import { formatDateTime } from "utils/dateTime";
import { loadFromLocalStorage, saveToLocalStorage } from "utils/localStorage";
import newSavedMap from "./newSavedMap";
import { SavedMap } from "./types";

const DEFAULT_ARRAY: SavedMap[] = [];

interface SaveLoadMenuProps {
  onSave: (savedMap: SavedMap) => void;
  onLoad: (world: WorldModel) => void;
  world: WorldModel;
  readonly?: boolean;
}

const SaveLoadMenu = ({
  onSave,
  onLoad,
  world,
  readonly = false,
}: SaveLoadMenuProps) => {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  const handleClickOnToolbar = useCallback(() => {
    setMenuVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setMenuVisible(false);
  }, []);

  const { value: savedMaps, setValue: setSavedMaps } = useLocalStorageState<
    SavedMap[]
  >("savedMaps", DEFAULT_ARRAY);

  const saveMap = useCallback(() => {
    const savedMap = newSavedMap(world.name);
    setSavedMaps((oldSaves) => {
      return [...oldSaves, savedMap];
    });
    saveToLocalStorage(world.id, world);
    onSave(savedMap);
  }, [onSave, setSavedMaps, world]);

  const handleClickOnSavedMaps = useCallback(
    (button: HTMLButtonElement) => {
      if (button.value === "load") {
        onLoad(loadFromLocalStorage<WorldModel>(world.id, world));
      }
      if (button.value === "delete") {
        setSavedMaps((oldSaves) => {
          return oldSaves.filter(({ id }) => id !== button.name);
        });
        localStorage.removeItem(button.name);
      }
    },
    [onLoad, setSavedMaps, world]
  );

  const handleClickSavedMaps = usePanelClickButton(handleClickOnSavedMaps);

  return (
    <>
      <button onClick={handleClickOnToolbar}>Storage</button>
      <Modal isVisible={isMenuVisible} onClose={handleCloseModal}>
        {!readonly ? (
          <button onClick={saveMap} name="add">
            Add
          </button>
        ) : null}
        <div onClick={handleClickSavedMaps}>
          {savedMaps.map((savedMap) => (
            <div key={savedMap.id}>
              <button value="load" name={savedMap.id.toString()}>
                <>
                  {savedMap.name}
                  {formatDateTime(savedMap.saved)}
                </>
              </button>
              {!readonly ? (
                <button value="delete" name={savedMap.id.toString()}>
                  x
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SaveLoadMenu;
