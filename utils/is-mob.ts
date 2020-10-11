import EntityType from "../entities/EntityType.ts";
import { BaseMob } from "../entities/mobs/Mob.ts";

export const isMob = (entity: unknown): entity is BaseMob => {
  if (typeof entity === "object" && entity !== null) {
    return Object.entries(entity)
      .map(([k, v]) => {
        switch (k) {
          case "entityType":
            return v === EntityType.MOB;
          case "entityId":
          case "name":
          case "mobType":
            return typeof v === "string";
          default:
            return false;
        }
      })
      .every((v) => v);
  }

  return false;
};

export default isMob;
