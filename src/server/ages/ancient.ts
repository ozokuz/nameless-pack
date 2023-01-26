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

  // Logs to charcoal
  event.recipes.minecraft.smoking(
    "minecraft:charcoal",
    "#minecraft:logs_that_burn",
  );

  // Harder Andesite Alloy
  event.remove({ output: "create:andesite_alloy" });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "minecraft:andesite",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_iron",
      amount: 30,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "minecraft:andesite",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_zinc",
      amount: 10,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "tconstruct:seared_stone",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_iron",
      amount: 30,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "tconstruct:seared_stone",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_zinc",
      amount: 10,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
});
