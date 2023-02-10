export default (event: Internal.RecipeEventJS) => {
  // Coke Brick
  event.remove({ output: "immersiveengineering:cokebrick" });
  event.recipes.minecraft.crafting_shaped(
    // @ts-expect-error multiple
    "3x immersiveengineering:cokebrick",
    ["CBC", "BSB", "CBC"],
    {
      C: "minecraft:clay_ball",
      B: "immersive_weathering:deepslate_brick",
      S: "#forge:sandstone",
    },
  );

  // Blast Brick
  event.remove({ output: "immersiveengineering:blastbrick" });
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin(
      "immersiveengineering:blastbrick",
      "tconstruct:seared_stone",
      1000,
    )
    .cast("minecraft:bricks")
    .consumeCast()
    .coolingTime(40);

  // Remove Kiln
  event.remove({ output: "immersiveengineering:slab_alloybrick" });
  event.remove({ output: "immersiveengineering:alloybrick" });
  event.remove({ type: "immersiveengineering:alloy" });

  // Insulating Glass
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin(
      "immersiveengineering:insulating_glass",
      "tconstruct:molten_iron",
      10,
    )
    .cast("#forge:glass")
    .consumeCast()
    .coolingTime(40);

  // Remove IE's Early Game Power Generation
  event.remove({ output: "immersiveengineering:dynamo" });
  event.remove({ output: "immersiveengineering:windmill" });
  event.remove({ output: "immersiveengineering:watermill" });

  // Steel Rods only in Metal Press
  event.remove({
    type: "tconstruct:casting_table",
    output: "immersiveengineering:stick_steel",
  });

  // Treated Wood automation with Create
  event.recipes.create.filling("immersiveengineering:treated_wood_horizontal", [
    "#minecraft:planks",
    {
      fluid: "immersiveengineering:creosote",
      nbt: {},
      amount: 125,
    },
  ]);
};
