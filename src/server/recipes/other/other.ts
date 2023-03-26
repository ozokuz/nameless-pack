export default (event: Internal.RecipeEventJS) => {
  // Remove Vanilla recipe for Painting
  event.remove({
    output: "minecraft:painting",
    type: "minecraft:crafting_shaped",
    input: "#minecraft:wool",
  });

  // Remove Sewing Kit Easy Needles
  ["wood", "stone", "bone", "gold"].forEach((material) => {
    event.remove({
      // @ts-expect-error dynamic
      output: `sewingkit:${material}_sewing_needle`,
      type: "minecraft:crafting_shapeless",
    });
  });

  // Remove stupid iron stick recipes
  event.remove({
    output: "#forge:rods/all_metal",
    type: "minecraft:crafting_shaped",
  });

  // Cast Iron Mesh Fence output 3 -> 4
  event.remove({ id: "createdeco:cast_iron_mesh_fence" });
  event.recipes.minecraft.crafting_shaped(
    // @ts-expect-error multiple
    "4x createdeco:cast_iron_mesh_fence",
    ["CSC", "CSC"],
    {
      C: "#forge:plates/cast_iron",
      S: "#forge:string",
    },
  );
};
