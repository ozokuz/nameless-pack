export default (event: Internal.RecipeEventJS) => {
  // Remove all bread related recipes
  event.remove({ output: "minecraft:bread", input: "minecraft:wheat" });
  event.remove({ output: "create:dough" });
  event.remove({ output: "minecraft:bread", input: "create:dough" });
  event.remove({ output: "farmersdelight:wheat_dough" });

  // Create 3 Dough from water & wheat flour
  event.recipes.minecraft
    // @ts-expect-error multiple
    .crafting_shapeless("3x farmersdelight:wheat_dough", [
      Item.of("ceramics:fluid_clay_bucket", '{fluid:"minecraft:water"}'),
      "create:wheat_flour",
      "create:wheat_flour",
      "create:wheat_flour",
    ])
    .replaceIngredient(
      Item.of("ceramics:fluid_clay_bucket", '{fluid:"minecraft:water"}'),
      "ceramics:empty_clay_bucket",
    );
  event.recipes.minecraft
    // @ts-expect-error multiple
    .crafting_shapeless("3x farmersdelight:wheat_dough", [
      "minecraft:water_bucket",
      "create:wheat_flour",
      "create:wheat_flour",
      "create:wheat_flour",
    ])
    .replaceIngredient("minecraft:water_bucket", "minecraft:bucket");

  // Create Dough from flour using Create
  event.recipes.create.splashing(
    "farmersdelight:wheat_dough",
    "#forge:flour/wheat",
  );

  // Cook dough on campfire for bread
  event.recipes.minecraft.campfire_cooking(
    "minecraft:bread",
    "farmersdelight:wheat_dough",
  );
};
