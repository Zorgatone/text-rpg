import { Mob, MobObj } from "./Mob.ts";
import MobType from "./MobType.ts";

export interface AnimalObj extends MobObj {
  mobType: MobType.ANIMAL;
}

export class Animal extends Mob implements AnimalObj {
  public constructor(uuid: string, entityId: string, name: string) {
    super(uuid, entityId, name, MobType.ANIMAL);
  }

  public get mobType(): MobType.ANIMAL {
    return MobType.ANIMAL;
  }
}

export default Animal;
