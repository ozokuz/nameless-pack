onEvent("recipes", (event) => {
  // Chunk loader
  event.remove({ output: "chunkloaders:single_chunk_loader" });
  event.recipes.minecraft.crafting_shaped(
    "chunkloaders:single_chunk_loader",
    [" C ", "SMS", " E "],
    {
      C: "createaddition:capacitor",
      S: "immersiveengineering:component_steel",
      M: "botania:manasteel_ingot",
      E: "create:electron_tube",
    },
  );
});
