export default (event: Internal.RecipeEventJS) => {
  // Wrench
  event.remove({ output: "prettypipes:wrench" });
  event.recipes.minecraft.crafting_shaped(
    "prettypipes:wrench",
    [" BB", " A ", "RT "],
    {
      B: "#forge:plates/brass",
      A: "create:andesite_alloy",
      R: "#forge:dyes/red",
      T: "immersiveengineering:stick_treated",
    },
  );

  // Pipe
  event.remove({
    output: "prettypipes:pipe",
    type: "minecraft:crafting_shaped",
  });
  event.recipes.minecraft.crafting_shaped(
    "prettypipes:pipe",
    ["B B", " G ", "B B"],
    {
      B: "#forge:rods/brass",
      G: "tconstruct:clear_glass",
    },
  );

  // Blank Module
  event.remove({ output: "prettypipes:blank_module" });
  event.recipes.minecraft.crafting_shaped(
    "prettypipes:blank_module",
    ["S", "P", "S"],
    {
      S: "#forge:plates/iron",
      P: "sophisticatedstorage:upgrade_base",
    },
  );

  // Item Terminal
  event.remove({ output: "prettypipes:item_terminal" });
  event.recipes.minecraft.crafting_shaped(
    "prettypipes:item_terminal",
    [" D ", "ABA", " C "],
    {
      D: "create:display_board",
      A: "immersiveengineering:component_electronic_adv",
      B: "create:brass_casing",
      C: "#forge:chests/wooden",
    },
  );

  // Crafting Terminal
  event.remove({ output: "prettypipes:crafting_terminal" });
  event.recipes.minecraft.crafting_shaped(
    "prettypipes:crafting_terminal",
    ["E", "I", "C"],
    {
      E: "create:electron_tube",
      I: "prettypipes:item_terminal",
      C: "minecraft:crafting_table",
    },
  );

  // Disable Autocrafting Modules for now
  // TODO: add recipes for these
  event.remove({ output: "prettypipes:low_crafting_module" });
  event.remove({ output: "prettypipes:medium_crafting_module" });
  event.remove({ output: "prettypipes:high_crafting_module" });

  // Disable Pipe Pressurizer for now
  event.remove({ output: "prettypipes:pressurizer" });
};
