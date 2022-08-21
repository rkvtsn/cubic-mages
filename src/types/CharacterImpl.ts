import CharacterModel from "./CharacterModel";
import { CellModel, CellNameType } from "./CellModel";

interface ICharacter {
  canMove(currentCell: CellModel, cell: CellModel): boolean;
}

class CharacterImpl implements CharacterModel, ICharacter {
  startLocation: CellNameType;

  constructor({ startLocation }: CharacterModel) {
    this.startLocation = startLocation;
  }

  canMove(currentCell: CellModel, cell: CellModel): boolean {
    return true;
  }

  //   makeAction(modAction: ActionModificatorModel) {
  //     const modificators = this.modificators?.filter(
  //       (modificator) => modAction.action === modificator.action
  //     );
  //     if (!modificators?.length) return true;

  //     return false;
  //   }

  //   makeMove(cell: CellModel) {
  //     if (!this.makeAction({ action: "move", cell })) {
  //       return cell;
  //     }

  //     return cell;
  //   }
}

export default CharacterImpl;

/**

const players = [];
player.add({
  name: 'Name',
  character: new Druid(),
})

// on change state?
player.setActive(true);

// player.pass()
player.takeFromBag()
player.activateSkill(skill)
player.canMove()

// 

 */
