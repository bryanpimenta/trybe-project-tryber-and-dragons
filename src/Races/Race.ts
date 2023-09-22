abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race._instances += 1;
  }

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;