import type { BaseAnimal } from "./entities/mobs/Animal.ts";
import type { BaseMonster } from "./entities/mobs/Monster.ts";

declare interface MobsObj {
  animals: BaseAnimal[];
  monsters: BaseMonster[];
}

declare interface EntitiesYAML {
  mobs: MobsObj;
}
