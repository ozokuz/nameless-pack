export default (event: Internal.RecipeEventJS) => {
  // Single Chunk Loader
  event.remove({ output: "chunkloaders:single_chunk_loader" });
  event.recipes.minecraft.crafting_shaped(
    "chunkloaders:single_chunk_loader",
    [" C ", "SMS", " E "],
    {
      C: "createaddition:capacitor",
      S: "immersiveengineering:component_steel",
      M: "botania:mana_pearl",
      E: "create:electron_tube",
    },
  );

  // Basic Chunk Loader
  event.remove({ output: "chunkloaders:basic_chunk_loader" });
  event.recipes.minecraft.crafting_shaped(
    "chunkloaders:basic_chunk_loader",
    ["RCR", "MSM", "RCR"],
    {
      M: "botania:rune_mana",
      S: "chunkloaders:single_chunk_loader",
      R: "#forge:rods/steel",
      C: "immersiveengineering:component_steel",
    },
  );

  // Temporarily disable other chunkloaders
  event.remove({ output: "chunkloaders:advanced_chunk_loader" });
  event.remove({ output: "chunkloaders:ultimate_chunk_loader" });
};
