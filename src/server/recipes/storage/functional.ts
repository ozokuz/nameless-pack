export default (event: Internal.RecipeEventJS) => {
  // Remove everything first
  event.remove({
    mod: "functionalstorage",
    not: { type: "functionalstorage:framed_recipe" },
  });

  // Framed Drawers
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_1",
    ["R R", " M ", "R R"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
    },
  );
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_2",
    ["R R", "CMC", "R R"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
      C: "minecraft:chain",
    },
  );
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_4",
    ["RCR", "CMC", "RCR"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
      C: "minecraft:chain",
    },
  );
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:compacting_framed_drawer",
    ["RTR", "IPI", "RMR"],
    {
      R: "#forge:rods/iron",
      T: "create:electron_tube",
      I: "minecraft:iron_ingot",
      P: "create:precision_mechanism",
      M: "createdeco:cast_iron_mesh_fence",
    },
  );

  // Size Upgrades
  // TODO: Add recipes for diamond & netherite versions
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:iron_downgrade",
    ["SSS", "SUS", "SSS"],
    {
      S: "#forge:plates/iron",
      U: "#forge:plates/cast_iron",
    },
  );
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:copper_upgrade",
    ["SBS", "CUC", "SBS"],
    {
      S: "#forge:plates/copper",
      B: "#forge:storage_blocks/copper",
      C: "#forge:chests/wooden",
      U: "#forge:plates/cast_iron",
    },
  );
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:gold_upgrade",
    ["SBS", "CUC", "SBS"],
    {
      S: "#forge:plates/gold",
      B: "#forge:storage_blocks/gold",
      C: "#forge:chests/wooden",
      U: "functionalstorage:copper_upgrade",
    },
  );

  // Other Upgrades
  // TODO: Add recipe for redstone upgrade
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:void_upgrade",
    [" V ", "OCO", " O "],
    {
      V: "bloodmagic:reagentvoid",
      O: "minecraft:obsidian",
      C: "#forge:plates/cast_iron",
    },
  );

  // Controllers
  // TODO: Add recipe for Ender Drawer
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:storage_controller",
    ["III", "ICI", "SDS"],
    {
      S: "#forge:plates/steel",
      I: "#forge:plates/iron",
      C: "immersiveengineering:component_electronic",
      D: "#functionalstorage:drawer",
    },
  );
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:controller_extension",
    ["III", "IEI", "SDS"],
    {
      S: "#forge:plates/steel",
      I: "#forge:plates/iron",
      E: "create:electron_tube",
      D: "#functionalstorage:drawer",
    },
  );

  // Tools
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:configuration_tool",
    ["IEI", "GMC", "III"],
    {
      E: "create:electron_tube",
      M: "immersiveengineering:component_iron",
      C: "#forge:wires/copper",
      I: "#forge:plates/iron",
      G: "#forge:dyes/green",
    },
  );
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:linking_tool",
    ["IEI", "GMC", "III"],
    {
      E: "immersiveengineering:component_electronic",
      M: "immersiveengineering:component_steel",
      C: "#forge:wires/copper",
      I: "#forge:plates/iron",
      G: "#forge:dyes/cyan",
    },
  );
};
