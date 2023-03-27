import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.instances += 1;
  }

  static createdArchetypesInstances(): number {
    return this.instances;
  }
}