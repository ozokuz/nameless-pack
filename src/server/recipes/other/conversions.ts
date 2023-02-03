export default (event: Internal.RecipeEventJS) => {
  // Disable Metal Conversions Without Melting
  event.remove({
    type: "minecraft:crafting_shapeless",
    input: "#forge:ingots",
    output: "#forge:storage_blocks",
  });
  event.remove({
    type: "minecraft:crafting_shapeless",
    input: "#forge:ingots",
    output: "#forge:nuggets",
  });
  event.remove({
    type: "minecraft:crafting_shapeless",
    input: "#forge:storage_blocks",
    output: "#forge:ingots",
  });
  event.remove({
    type: "minecraft:crafting_shapeless",
    input: "#forge:nuggets",
    output: "#forge:ingots",
  });
};
