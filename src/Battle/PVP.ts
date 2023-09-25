import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _anotherPlayer: Fighter;

  constructor(player: Fighter, anotherPlayer: Fighter) {
    super(player);
    this._anotherPlayer = anotherPlayer;
  }

  override fight(): number {
    while (this.player.lifePoints > 0 && this._anotherPlayer.lifePoints > 0) {
      this.player.attack(this._anotherPlayer);
      this._anotherPlayer.attack(this.player);
    }
    
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}

export default PVP;