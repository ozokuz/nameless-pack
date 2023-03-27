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
  event.remove({ output: "immersiveengineering:windmill_blade" });
  event.remove({ output: "immersiveengineering:windmill_sail" });
  event.remove({ output: "immersiveengineering:waterwheel_segment" });

  // Steel Rods only in Metal Press
  event.remove({
    type: "tconstruct:casting_table",
    output: "immersiveengineering:stick_steel",
  });

  // Early way of making Steel Scaffolding
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin(
      "immersiveengineering:steel_scaffolding_standard",
      "#forge:molten_steel",
      540,
    )
    .cast("immersiveengineering:treated_scaffold")
    .consumeCast()
    .coolingTime(40);

  // Treated Wood automation with Create
  event.recipes.create.filling("immersiveengineering:treated_wood_horizontal", [
    "#minecraft:planks",
    {
      fluid: "immersiveengineering:creosote",
      nbt: {},
      amount: 125,
    },
  ]);

  // Remove IE's Component Making in Crafting Table
  event.remove({
    type: "minecraft:crafting_shaped",
    output: "immersiveengineering:component_iron",
  });
  event.remove({
    type: "minecraft:crafting_shaped",
    output: "immersiveengineering:component_steel",
  });

  // Redstone Engineering Block
  event.remove({ output: "immersiveengineering:rs_engineering" });
  event.recipes.minecraft.crafting_shaped(
    // @ts-expect-error multiple
    "2x immersiveengineering:rs_engineering",
    ["SES", "CRC", "SPS"],
    {
      S: "immersiveengineering:sheetmetal_iron",
      E: "create:electron_tube",
      C: "immersiveengineering:wirecoil_redstone",
      R: "minecraft:redstone_block",
      P: "create:precision_mechanism",
    },
  );

  // No HOP Graphite in alloyers
  event.remove({
    output: "immersiveengineering:ingot_hop_graphite",
    type: "immersiveengineering:arc_furnace",
  });
  event.remove({
    output: "immersiveengineering:ingot_hop_graphite",
    type: "thermal:smelter",
  });
};
