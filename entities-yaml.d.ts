import type { AnimalObj } from "./entities/mobs/Animal.ts";
import type { MonsterObj } from "./entities/mobs/Monster.ts";

declare interface MobsObj {
  animals: AnimalObj[];
  monsters: MonsterObj[];
}

declare interface EntitiesYAML {
  mobs: MobsObj;
}
