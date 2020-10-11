import Entity, { EntityObj } from "../Entity.ts";
import EntityType from "../EntityType.ts";
import MobType from "./MobType.ts";

export interface MobObj extends EntityObj {
  type: EntityType.MOB;
  mobType: MobType;
}

export class Mob extends Entity implements MobObj {
  private _nickname: string | undefined;

  protected constructor(
    uuid: string,
    entityId: string,
    name: string,
    private readonly _mobType: MobType
  ) {
    super(uuid, entityId, name, EntityType.MOB);

    this.nickname = undefined;
  }

  public get type(): EntityType {
    return EntityType.MOB;
  }

  public get mobType(): MobType {
    return this._mobType;
  }

  public get nickname(): string | undefined {
    return this._nickname;
  }

  public set nickname(nickname: string | undefined) {
    this._nickname = nickname;
  }
}

export default Mob;
