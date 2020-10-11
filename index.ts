import { parse } from "https://deno.land/std@0.74.0/encoding/yaml.ts";
import { v4 } from "https://deno.land/std@0.74.0/uuid/mod.ts";

import Monster from "./entities/mobs/Monster.ts";
import { isEntitiesYAML } from "./utils/is-entities-yaml.ts";

const fileURL = new URL("./entities.yaml", import.meta.url);

Deno.readTextFile(fileURL)
  .then((textFile) => {
    const entities = parse(textFile);

    if (isEntitiesYAML(entities)) {
      const mobs = entities.mobs;

      console.log("Animals:");
      mobs.animals.forEach((animal) => console.log(animal));
      console.log("Monsters:");
      mobs.monsters.forEach((monster) => console.log(monster));

      if (mobs.monsters.length > 0) {
        const m = mobs.monsters[0];

        const monster = new Monster(v4.generate(), m.entityId, m.name);
        monster.nickname = "Darth Goblin";

        console.log(monster);
      }
    } else {
      console.error("Invalid YAML file!");
    }
  })
  .catch((error) => {
    console.error("read error", error);
    Deno.exit(-1);
  });
