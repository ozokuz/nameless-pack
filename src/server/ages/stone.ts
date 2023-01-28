onEvent("recipes", (event) => {
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

  // Logs to charcoal
  event.recipes.minecraft.smoking(
    "minecraft:charcoal",
    "#minecraft:logs_that_burn",
  );

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

  // Sawdust
  event.recipes.minecraft
    .crafting_shapeless("immersiveengineering:sawdust", [
      "minecraft:stick",
      "tinkersurvival:mortar_and_pestle",
    ])
    .keepIngredient("tinkersurvival:mortar_and_pestle");

  // Paper
  event.remove({
    output: "minecraft:paper",
  });
  event.recipes.minecraft.crafting_shaped("minecraft:paper", ["SSS"], {
    S: "minecraft:sugar_cane",
  });
  event.recipes.minecraft.crafting_shaped(
    // @ts-expect-error multiple
    "3x minecraft:paper",
    [" H ", "SSS", "SSS"],
    {
      H: Item.of("immersiveengineering:hammer").ignoreNBT(),
      S: "#forge:dusts/wood",
    },
  );

  // Book
  event.remove({
    output: "minecraft:book",
    type: "minecraft:crafting_shapeless",
  });
});
