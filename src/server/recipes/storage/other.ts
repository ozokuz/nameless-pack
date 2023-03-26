import recipes from "../../helpers/recipes";

export default (event: Internal.RecipeEventJS) => {
  // Easier Sack
  event.remove({ output: "supplementaries:sack" });
  event.recipes.minecraft.crafting_shaped(
    "supplementaries:sack",
    ["SPS", "S S", "SSS"],
    {
      S: "farmersdelight:straw",
      P: "#forge:string",
    },
  );

  // Quark Backpack
  event.remove({ output: "quark:backpack" });
  recipes.sewingkit.sewing(
    "quark:backpack",
    [
      {
        count: 8,
        item: "sewingkit:leather_sheet",
      },
      {
        count: 3,
        item: "sewingkit:leather_strip",
      },
      {
        count: 2,
        tag: "#forge:string",
      },
      {
        count: 1,
        tag: "#forge:plates/iron",
      },
    ],
    event,
  );

  // Quark Crate
  event.remove({ output: "quark:crate" });
  event.recipes.minecraft.crafting_shaped(
    "quark:crate",
    ["PSP", "RPR", "PSP"],
    {
      P: "#forge:treated_wood",
      S: "#forge:plates/iron",
      R: "#forge:rods/iron",
    },
  );

  // Remove Immersive Engineering Crates
  event.remove({ output: "engineersdecor:labeled_crate" });
  event.remove({ output: "immersiveengineering:crate" });
  event.remove({ output: "immersiveengineering:reinforced_crate" });

  // Gate LaserIO later in the game
  event.remove({ output: "laserio:logic_chip" });
  event.remove({ output: "laserio:logic_chip_raw" });
  recipes.ae2.inscriber(
    "laserio:logic_chip",
    {
      middle: "laserio:logic_chip_raw",
    },
    "press",
    event,
  );
  event.recipes.minecraft.crafting_shaped(
    "laserio:logic_chip_raw",
    ["RCR", "QDQ", "GGG"],
    {
      R: "minecraft:redstone",
      C: "immersiveengineering:component_electronic",
      Q: "#forge:storage_blocks/quartz",
      D: "immersiveengineering:plate_duroplast",
      G: "#forge:nuggets/gold",
    },
  );
};
