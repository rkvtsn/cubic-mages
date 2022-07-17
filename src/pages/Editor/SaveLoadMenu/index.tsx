import Modal from "components/Modal";
import usePanelClickButton from "hooks/usePanelClickButton";
import { useCallback, useState } from "react";
import generateId from "utils/generateId";
import useLocalStorageState from "utils/LocalStorage";
import { ButtonMenuStyled } from "./styles";

const DEFAULT_ARRAY: SavedMap[] = [];

interface SavedMap {
  id: string;
  name: string;
  saved: Date;
}

const newSavedMap = (): SavedMap => {
  return {
    id: generateId().toString(),
    name: `map_${generateId()}`,
    saved: new Date(),
  };
};

interface SaveLoadMenuProps {
  onSave: (id: string) => void;
  onLoad: (id: string) => void;
}

const SaveLoadMenu = ({ onSave, onLoad }: SaveLoadMenuProps) => {
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
    const savedMap = newSavedMap();
    setSavedMaps((oldSaves) => {
      return [...oldSaves, savedMap];
    });
    onSave(savedMap.id);
  }, [onSave, setSavedMaps]);

  const handleClickOnSavedMaps = useCallback(
    (button: HTMLButtonElement) => {
      if (button.value === "load") {
        onLoad(button.name);
      }
      if (button.value === "delete") {
        setSavedMaps((oldSaves) => {
          return oldSaves.filter(({ id }) => id !== button.name);
        });
      }
    },
    [onLoad, setSavedMaps]
  );

  const handleClickSavedMaps = usePanelClickButton(handleClickOnSavedMaps);

  return (
    <>
      <ButtonMenuStyled onClick={handleClickOnToolbar}>
        Storage
      </ButtonMenuStyled>
      <Modal isVisible={isMenuVisible} onClose={handleCloseModal}>
        <button onClick={saveMap} name="add">
          Add
        </button>
        <div onClick={handleClickSavedMaps}>
          {savedMaps.map((savedMap) => (
            <div key={savedMap.id}>
              <button value="load" name={savedMap.id.toString()}>
                {savedMap.name}
              </button>
              <button value="delete" name={savedMap.id.toString()}>
                x
              </button>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SaveLoadMenu;
