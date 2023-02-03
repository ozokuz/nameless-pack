export default (event: Internal.RecipeEventJS) => {
  // Remove Functional Storage's Wood Drawers
  [
    "oak",
    "birch",
    "spruce",
    "jungle",
    "dark_oak",
    "acacia",
    "crimson",
    "warped",
  ].forEach((material) => {
    [1, 2, 4].forEach((size) => {
      // @ts-expect-error dynamic
      event.remove({ output: `functionalstorage:${material}_${size}` });
    });
  });

  // Remove Functional Storage's Compacting Drawers
  event.remove({ output: "functionalstorage:compacting_drawer" });
  event.remove({ output: "functionalstorage:simple_compacting_drawer" });

  // Better framed 1x1 drawers
  event.remove({ output: "functionalstorage:framed_1" });
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_1",
    ["R R", " M ", "R R"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
    },
  );

  // Better framed 1x2 drawers
  event.remove({ output: "functionalstorage:framed_2" });
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_2",
    ["R R", "CMC", "R R"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
      C: "minecraft:chain",
    },
  );

  // Better framed 2x2 drawers
  event.remove({ output: "functionalstorage:framed_4" });
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_4",
    ["RCR", "CMC", "RCR"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
      C: "minecraft:chain",
    },
  );

  // Better framed compacting drawers
  event.remove({ output: "functionalstorage:compacting_framed_drawer" });
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
};
