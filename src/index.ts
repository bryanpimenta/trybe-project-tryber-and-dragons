import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('Buraia');
const player2 = new Character('Dusdoom');
const player3 = new Character('Michelly Ziggs');

player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export { 
  player1, player2, player3, monster1, monster2, pvp, pve, runBattles, 
};