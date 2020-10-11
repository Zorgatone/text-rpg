import { BaseMob, Mob } from "./Mob.ts";
import MobType from "./MobType.ts";

export interface BaseMonster extends BaseMob {
  mobType: MobType.MONSTER;
}

export class Monster extends Mob implements BaseMonster {
  public constructor(uuid: string, entityId: string, name: string) {
    super(uuid, entityId, name, MobType.MONSTER);
  }

  public get mobType(): MobType.MONSTER {
    return MobType.MONSTER;
  }
}

export default Monster;
