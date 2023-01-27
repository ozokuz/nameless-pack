import recipes from "../helpers/recipes";

onEvent("recipes", (event) => {
  // Plates Need 2 Ingots
  event.forEachRecipe(
    {
      output: "#forge:plates",
      type: "minecraft:crafting_shapeless",
      input: "immersiveengineering:hammer",
    },
    (recipe) => {
      const ingot = recipe.originalRecipeIngredients
        .toArray()
        .find(
          (item: Internal.IngredientJS) =>
            item.getFirst().getId() !== "immersiveengineering:hammer",
        )![0]! as Internal.IngredientJS;
      const plate = recipe.originalRecipeResult;

      event.remove({
        output: "#forge:plates",
        input: ingot,
        type: "minecraft:crafting_shapeless",
      });

      event.recipes.minecraft.crafting_shapeless(plate, [
        Item.of("immersiveengineering:hammer").ignoreNBT(),
        ingot,
        ingot,
      ]);
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

  // Quark Backpack
  event.remove({ output: "quark:backpack" });
  recipes.sewingkit.sewing(
    "quark:backpack",
    [
      {
        count: 8,
        item: "sewingkit:leather_sheet",
      },
      {
        count: 3,
        item: "sewingkit:leather_strip",
      },
      {
        count: 2,
        tag: "#forge:string",
      },
      {
        count: 1,
        tag: "#forge:plates/iron",
      },
    ],
    event,
  );

  // Leather Backpack
  event.remove({ output: "sophisticatedbackpacks:backpack" });
  recipes.sewingkit.sewing(
    "sophisticatedbackpacks:backpack",
    [
      {
        count: 12,
        item: "sewingkit:leather_sheet",
      },
      {
        count: 6,
        item: "sewingkit:leather_strip",
      },
      {
        count: 4,
        tag: "#forge:string",
      },
      {
        count: 1,
        tag: "#forge:plates/iron",
      },
    ],
    event,
  );
});
