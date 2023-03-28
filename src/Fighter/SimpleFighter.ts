export default interface SimpleFighter {
  lifePoints: number
  strength: number
  defense: number

  attack(enemy: SimpleFighter) : void
  receiveDamage(attackPoints: number): number
}