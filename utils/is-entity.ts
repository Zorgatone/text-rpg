import { BaseEntity } from "../entities/Entity.ts";
import EntityType from "../entities/EntityType.ts";
import isMob from "./is-mob.ts";

export const isEntity = (entity: unknown): entity is BaseEntity => {
  if (typeof entity === "object" && entity !== null) {
    const entry = Object.entries(entity).find(([key]) => key == "entityType");

    switch (entry?.[1]) {
      case EntityType.MOB:
        return isMob(entity);
      case undefined:
      default:
        return false;
    }
  }

  return false;
};

export default isEntity;
