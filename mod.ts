import { parse } from "https://deno.land/std@0.74.0/encoding/yaml.ts";
import { v4 } from "https://deno.land/std@0.74.0/uuid/mod.ts";
import Entity from "./entities/Entity.ts";

import Monster from "./entities/mobs/Monster.ts";
import { isEntitiesYAML } from "./utils/is-entities-yaml.ts";

const locale = "en_US";
const localeURL = new URL(`./locales/${locale}.yaml`, import.meta.url);

const fileURL = new URL("./entities.yaml", import.meta.url);

Promise.all([Deno.readTextFile(localeURL), Deno.readTextFile(fileURL)])
  .then(([localeFile, entitiesFile]) => {
    const locales: any = parse(localeFile);
    const entities = parse(entitiesFile);

    const ht = (key: string): string => {
      return key.split(".").reduce((o, i) => o?.[i] || "", locales);
    };

    // console.log(locales);

    if (isEntitiesYAML(entities)) {
      const mobs = entities.mobs;

      // console.log("Animals:");
      // mobs.animals.forEach((animal) => console.log(animal));
      // console.log("Monsters:");
      // mobs.monsters.forEach((monster) => console.log(monster));

      if (mobs.monsters.length > 0) {
        const m = mobs.monsters[0];

        const monster = new Monster(v4.generate(), m.entityId, m.name);
        // monster.nickname = "Darth Goblin";

        // console.log(monster instanceof Entity);

        console.log(monster.nickname ?? ht(monster.name), monster.uuid);
      }
    } else {
      console.error("Invalid YAML file!");
    }
  })
  .catch((error) => {
    console.error("read error", error);
    Deno.exit(-1);
  });
