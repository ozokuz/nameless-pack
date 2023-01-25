onEvent("recipes", (event) => {
  // Remove Easy Bread
  event.remove({ output: "minecraft:bread", input: "minecraft:wheat" });

  // Make Bread Recipe Harder
  event.remove({ output: "create:dough" });
  event.remove({ output: "minecraft:bread", input: "create:dough" });
  event.remove({ output: "farmersdelight:wheat_dough" });
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
  event.recipes.minecraft.campfire_cooking(
    "minecraft:bread",
    "farmersdelight:wheat_dough",
  );
});
