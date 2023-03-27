export default (event: Internal.RecipeEventJS) => {
  // Remove Hammer
  event.remove({ output: "beyond_earth:hammer" });

  // Remove useless machines
  event.remove({ output: "beyond_earth:solar_panel" });
  event.remove({ output: "beyond_earth:coal_generator" });
  event.remove({ output: "beyond_earth:compressor" });
  event.remove({ output: "beyond_earth:fuel_refinery" });
  event.remove({ output: "beyond_earth:water_pump" });
  event.remove({ type: "beyond_earth:fuel_refinery" });

  // Remove awful plate recipes
  event.remove({ output: "beyond_earth:iron_plate" });
  event.remove({
    output: "beyond_earth:desh_plate",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "beyond_earth:desh_plate",
    type: "minecraft:crafting_shapeless",
  });

  // Compress in Pressure Chamber
  event.forEachRecipe({ type: "beyond_earth:compressor" }, (recipe) => {
    event.remove({ output: recipe.originalRecipeResult });
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      // @ts-expect-error custom
      inputs: [
        {
          item: recipe.originalRecipeIngredients[0]!.first.id,
        },
      ],
      pressure: 3.0,
      results: [
        {
          item: recipe.originalRecipeResult,
        },
      ],
    });
  });
};
