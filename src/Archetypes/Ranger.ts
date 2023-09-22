import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instances += 1;
  }

  get name(): string { return this.name; }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { return Ranger._instances; }
}

export default Ranger;