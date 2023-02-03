export default (event: Internal.RecipeEventJS) => {
  // Remove easier atlas recipe
  event.remove({
    output: "antiqueatlas:empty_antique_atlas",
    input: "minecraft:book",
  });

  // Easier Compass
  event.remove({ output: "minecraft:compass" });
  event.recipes.minecraft.crafting_shaped(
    "minecraft:compass",
    [" I ", "IRI", " I "],
    {
      I: "#forge:ingots/iron",
      R: "#forge:dyes/red",
    },
  );
};
