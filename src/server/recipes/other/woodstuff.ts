export default (event: Internal.RecipeEventJS) => {
  // Nerf Create Log Sawing
  event.forEachRecipe(
    {
      output: "#minecraft:planks",
      type: "create:cutting",
    },
    (recipe) => {
      const plank = recipe.originalRecipeResult.withCount(4);
      const log = recipe.originalRecipeIngredients[0]!;

      event.recipes.create.cutting(plank, log);
      event.remove({
        output: recipe.originalRecipeResult,
        type: "create:cutting",
      });
    },
  );

  // Making slabs from planks in create's mechanical saw
  event.forEachRecipe(
    {
      input: "#minecraft:planks",
      output: "#minecraft:wooden_slabs",
    },
    (recipe) => {
      const plank = recipe.originalRecipeIngredients[0]!;
      const slab = recipe.originalRecipeResult.withCount(2);

      event.recipes.create.cutting(slab, plank);
    },
  );

  // Making sticks from slabs in create's mechanical saw
  // @ts-expect-error multiple
  event.recipes.create.cutting("2x minecraft:stick", "#minecraft:wooden_slabs");
};
