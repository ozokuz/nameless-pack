export default (event: Internal.RecipeEventJS) => {
  // Nerf Create Log Sawing
  event.forEachRecipe(
    {
      output: "#minecraft:planks",
      type: "create:cutting",
    },
    (recipe) => {
      const plank = recipe.originalRecipeResult.getId() as any;
      const log = recipe.originalRecipeIngredients[0]!;

      // @ts-expect-error multiple dynamic
      event.recipes.create.cutting(`4x ${plank}`, log);
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
      const slab = recipe.originalRecipeResult.getId() as any;

      // @ts-expect-error multiple dynamic
      event.recipes.create.cutting(`2x ${slab}`, plank);
    },
  );

  // Making sticks from slabs in create's mechanical saw
  // @ts-expect-error multiple
  event.recipes.create.cutting("2x minecraft:stick", "#minecraft:wooden_slabs");
};
