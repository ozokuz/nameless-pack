onEvent("recipes", (event) => {
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
  event.recipes.create.cutting("6x minecraft:stick", "#minecraft:wooden_slabs");
});
