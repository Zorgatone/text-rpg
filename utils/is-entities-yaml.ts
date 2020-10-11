import { EntityObj } from "../entities/Entity.ts";
import type { EntitiesYAML } from "../entities-yaml.d.ts";
import isEntity from "./is-entity.ts";

const isMobs = (entities: unknown): entities is EntityObj[] => {
  if (typeof entities === "object" && entities !== null) {
    return Object.entries(entities)
      .map(([k, v]) => {
        switch (k) {
          case "animals":
          case "monsters":
            return Array.isArray(v) && v.every((x) => isEntity(x));
          default:
            return false;
        }
      })
      .every((v) => v);
  }

  return false;
};

export const isEntitiesYAML = (yaml: unknown): yaml is EntitiesYAML => {
  if (typeof yaml === "object" && yaml !== null) {
    return Object.entries(yaml)
      .map(([k, v]) => {
        switch (k) {
          case "mobs":
            return isMobs(v);
          default:
            return false;
        }
      })
      .every((v) => v);
  }

  return false;
};

export default isEntitiesYAML;
