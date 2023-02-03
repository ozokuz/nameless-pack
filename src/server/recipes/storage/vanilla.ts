export default (event: Internal.RecipeEventJS) => {
  // Easier Bundle
  event.remove({ output: "minecraft:bundle" });
  event.recipes.minecraft.crafting_shaped(
    "minecraft:bundle",
    [" S ", "L L", " L "],
    {
      L: "minecraft:leather",
      S: "#forge:string",
    },
  );

  // Harder Chest
  event.forEachRecipe(
    { output: "#forge:chests/wooden", type: "minecraft:crafting_shaped" },
    (recipe) => {
      const plank = recipe.originalRecipeIngredients[0];
      const chest = recipe.originalRecipeResult;

      event.remove({ output: chest });
      event.recipes.minecraft.crafting_shaped(chest, ["PPP", "PIP", "PPP"], {
        // @ts-expect-error dynamic
        P: plank,
        I: "minecraft:iron_nugget",
      });
    },
  );

  // Harder Barrel
  event.remove({ output: "minecraft:barrel" });
  event.recipes.minecraft.crafting_shaped(
    "minecraft:barrel",
    ["PSP", "PIP", "PSP"],
    {
      P: "#minecraft:planks",
      S: "#minecraft:wooden_slabs",
      I: "minecraft:iron_nugget",
    },
  );
};
