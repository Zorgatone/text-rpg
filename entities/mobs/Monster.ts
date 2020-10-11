import { Mob, MobObj } from "./Mob.ts";
import MobType from "./MobType.ts";

export interface MonsterObj extends MobObj {
  mobType: MobType.MONSTER;
}

export class Monster extends Mob implements MonsterObj {
  public constructor(uuid: string, entityId: string, name: string) {
    super(uuid, entityId, name, MobType.MONSTER);
  }

  public get mobType(): MobType.MONSTER {
    return MobType.MONSTER;
  }
}

export default Monster;
