onEvent("recipes", (event) => {
  // Harder Chest
  event.forEachRecipe(
    { output: "#forge:chests/wooden", type: "minecraft:crafting_shaped" },
    (recipe) => {
      const plank = recipe.originalRecipeIngredients[0];
      const chest = recipe.originalRecipeResult;

      event.remove({ output: chest });
      event.shaped(chest, ["PPP", "PIP", "PPP"], {
        // @ts-expect-error
        P: plank,
        I: "minecraft:iron_nugget",
      });
    }
  );

  // Easier Sack
  // @ts-expect-error
  event.remove({ output: "#supplementaries:sack" });
  event.shaped("supplementaries:sack", ["SPS", "S S", "SSS"], {
    S: "farmersdelight:straw",
    P: "#forge:string",
  });

  // Easier Compass
  event.remove({ output: "minecraft:compass" });
  event.shaped("minecraft:compass", [" I ", "IRI", " I "], {
    I: "#forge:ingots/iron",
    R: "#forge:dyes/red",
  });
});
