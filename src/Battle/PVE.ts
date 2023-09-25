import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';

type Fighters = Fighter | SimpleFighter | Monster;

class PVE extends Battle {
  private _enemies: Fighters[];
    
  constructor(player: Fighter, enemies: Fighters[]) {
    super(player);
    this._enemies = enemies;
  }

  enemyFight(enemy: Fighters): number {
    while (this.player.lifePoints > -1) {
      this.player.attack(enemy);
      if (enemy.lifePoints === -1) return 1;
      enemy.attack(this.player);
    }
    return -1;
  }
    
  override fight(): number {
    const battles = this._enemies.map((enemy) => this.enemyFight(enemy));
    if (battles.includes(1)) return 1;
    return -1;
  }
}

export default PVE;