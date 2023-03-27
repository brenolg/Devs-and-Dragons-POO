import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}