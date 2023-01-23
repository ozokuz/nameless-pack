onEvent("recipes", (event) => {
  // Remove Easy Bread
  event.remove({ output: "minecraft:bread", input: "minecraft:wheat" });

  // Make Bread Recipe Harder
  event.remove({ output: "create:dough" });
  event.remove({ output: "minecraft:bread", input: "create:dough" });
  event.remove({ output: "farmersdelight:wheat_dough" });
  event
    // @ts-expect-error
    .shapeless("3x farmersdelight:wheat_dough", [
      // @ts-expect-error
      Item.of("ceramics:fluid_clay_bucket", '{fluid:"minecraft:water"}'),
      "create:wheat_flour",
      "create:wheat_flour",
      "create:wheat_flour",
    ])
    // @ts-expect-error
    .replaceIngredient(1, "ceramics:empty_clay_bucket");
  event
    // @ts-expect-error
    .shapeless("3x farmersdelight:wheat_dough", [
      "minecraft:water_bucket",
      "create:wheat_flour",
      "create:wheat_flour",
      "create:wheat_flour",
    ])
    .replaceIngredient(1, "minecraft:bucket");
  event.campfireCooking("minecraft:bread", "farmersdelight:wheat_dough");
});
