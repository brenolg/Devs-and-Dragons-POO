import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}