import { ICharacterService } from "services/CharacterService";

export interface ModificatorModel {
  name: string;
  icon?: string;
  action: string;
  apply(character: ICharacterService): void;
}

export class ModificatorForestNatureMove implements ModificatorModel {
  name: string;
  icon?: string | undefined;
  action: string;
  apply(character: ICharacterService): void {
    // if (this.action !== action) return false;
  }

  constructor(name: string, action: string, icon?: string) {
    this.name = name;
    this.icon = icon;
    this.action = action;
  }
}
