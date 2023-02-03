export default (event: Internal.RecipeEventJS) => {
  // Sawdust
  event.recipes.minecraft
    .crafting_shapeless("immersiveengineering:dust_wood", [
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
  event.recipes.minecraft
    .crafting_shaped(
      // @ts-expect-error multiple
      "3x minecraft:paper",
      [" W ", "SSS", "SSS"],
      {
        W: "minecraft:water_bucket",
        S: "#forge:dusts/wood",
      },
    )
    .replaceIngredient("minecraft:water_bucket", "minecraft:bucket");
  event.recipes.minecraft
    .crafting_shaped(
      // @ts-expect-error multiple
      "3x minecraft:paper",
      [" W ", "SSS", "SSS"],
      {
        W: Item.of("ceramics:fluid_clay_bucket", '{fluid:"minecraft:water"}'),
        S: "#forge:dusts/wood",
      },
    )
    .replaceIngredient(
      Item.of("ceramics:fluid_clay_bucket", '{fluid:"minecraft:water"}'),
      "ceramics:empty_clay_bucket",
    );

  // Book
  event.remove({
    output: "minecraft:book",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.minecraft.crafting_shaped("minecraft:book", ["SCP", "CPP"], {
    P: "minecraft:paper",
    S: "#forge:string",
    C: "minecraft:leather",
  });
  event.recipes.minecraft.crafting_shaped("minecraft:book", ["SCP", "CPP"], {
    P: "minecraft:paper",
    S: "#forge:string",
    C: "tconstruct:pattern",
  });
};
