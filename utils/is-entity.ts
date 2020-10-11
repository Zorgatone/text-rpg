import { EntityObj } from "../entities/Entity.ts";

export const isEntity = (entity: unknown): entity is EntityObj => {
  if (typeof entity === "object" && entity !== null) {
    return Object.entries(entity)
      .map(([k, v]) => {
        switch (k) {
          case "entityId":
          case "name":
          case "entityType":
            return typeof v === "string";
          default:
            return false;
        }
      })
      .every((v) => v);
  }

  return false;
};

export default isEntity;
