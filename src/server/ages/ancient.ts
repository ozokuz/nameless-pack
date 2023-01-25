onEvent("recipes", (event) => {
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

  // Easier Sack
  event.remove({ output: "supplementaries:sack" });
  event.recipes.minecraft.crafting_shaped(
    "supplementaries:sack",
    ["SPS", "S S", "SSS"],
    {
      S: "farmersdelight:straw",
      P: "#forge:string",
    },
  );

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
});

// Prevent players from breaking choppables without an axe
onEvent("block.break", (event) => {
  if (!event.player) return;
  if (event.player.isFake()) return;
  if (!event.block.hasTag("treechop:choppables")) return;
  if (!event.player.mainHandItem) return;
  if (event.player.mainHandItem.hasTag("nameless:axe")) return;

  event.cancel();
});
