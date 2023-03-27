import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}