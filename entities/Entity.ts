import EntityType from "./EntityType.ts";

export interface EntityObj {
  readonly entityId: string;
  readonly name: string;
  readonly entityType: EntityType;
}

export class Entity implements EntityObj {
  protected constructor(
    public readonly uuid: string,
    public readonly entityId: string,
    protected _name: string,
    private readonly _entityType: EntityType
  ) {}

  public get name(): string {
    return this._name;
  }

  public get entityType(): EntityType {
    return this._entityType;
  }
}

export default Entity;
