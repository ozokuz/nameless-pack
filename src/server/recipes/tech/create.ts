export default (event: Internal.RecipeEventJS) => {
  // Harder Andesite Alloy
  event.remove({
    output: "create:andesite_alloy",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "create:andesite_alloy",
    type: "create:mixing",
  });
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_iron", 30)
    .cast("minecraft:andesite")
    .consumeCast()
    .coolingTime(40);
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_zinc", 10)
    .cast("minecraft:andesite")
    .consumeCast()
    .coolingTime(40);
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_iron", 30)
    .cast("tconstruct:seared_stone")
    .consumeCast()
    .coolingTime(40);
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_zinc", 10)
    .cast("tconstruct:seared_stone")
    .consumeCast()
    .coolingTime(40);

  // Casings
  event.remove({ output: "create:andesite_casing" });
  event.remove({ output: "create:copper_casing" });
  event.remove({ output: "create:brass_casing" });

  event.recipes.create.item_application("create:andesite_casing", [
    "#forge:treated_wood",
    "create:andesite_alloy",
  ]);
  event.recipes.create.item_application("create:copper_casing", [
    "#forge:treated_wood",
    "#forge:plates/copper",
  ]);
  event.recipes.create.item_application("create:brass_casing", [
    "#forge:treated_wood",
    "#forge:plates/brass",
  ]);

  // Cogs
  event.remove({ output: "create:cogwheel", input: "create:shaft" });
  event.remove({ output: "create:large_cogwheel" });

  event.recipes.minecraft.crafting_shapeless("create:cogwheel", [
    "create:shaft",
    "#forge:treated_wood",
  ]);
  event.recipes.minecraft.crafting_shapeless("create:large_cogwheel", [
    "create:cogwheel",
    "#forge:treated_wood",
  ]);
  event.recipes.minecraft.crafting_shapeless("create:large_cogwheel", [
    "create:shaft",
    "#forge:treated_wood",
    "#forge:treated_wood",
  ]);

  event.custom({
    type: "create:deploying",
    // @ts-expect-error custom
    ingredients: [
      {
        item: "create:shaft",
      },
      {
        tag: "forge:treated_wood",
      },
    ],
    results: [
      {
        item: "create:cogwheel",
      },
    ],
  });

  event.custom({
    type: "create:deploying",
    // @ts-expect-error custom
    ingredients: [
      {
        item: "create:cogwheel",
      },
      {
        tag: "forge:treated_wood",
      },
    ],
    results: [
      {
        item: "create:large_cogwheel",
      },
    ],
  });

  // Mechanical Saw
  event.remove({ output: "create:mechanical_saw" });
  event.recipes.minecraft.crafting_shapeless("create:mechanical_saw", [
    "create:andesite_casing",
    "immersiveengineering:sawblade",
  ]);

  // Better steam engine
  event.remove({ output: "create:steam_engine" });
  event.recipes.create.mechanical_crafting(
    "create:steam_engine",
    [" S ", "CAC", "CBC"],
    {
      S: "#forge:plates/brass",
      C: "#forge:plates/copper",
      B: "#forge:storage_blocks/copper",
      A: "create:andesite_alloy",
    },
  );

  // Better fluid tank
  event.remove({ output: "create:fluid_tank" });
  event.recipes.minecraft.crafting_shaped(
    "create:fluid_tank",
    ["C", "G", "C"],
    {
      C: "#forge:plates/copper",
      G: "tconstruct:clear_glass",
    },
  );

  // Remove most of Create Crafts & Additions
  event.remove({ mod: "createaddition" });

  // Re-Add Some of Create Crafts & Additions
  event.recipes.create.pressing(
    "createaddition:zinc_sheet",
    "create:zinc_ingot",
  );
  event.recipes.minecraft.crafting_shaped(
    "createaddition:capacitor",
    ["Z", "C", "R"],
    {
      Z: "#forge:plates/zinc",
      C: "#forge:plates/copper",
      R: "minecraft:redstone_torch",
    },
  );
  event.recipes.create.mechanical_crafting(
    "createaddition:alternator",
    ["  A  ", " IWI ", "IWRWI", " ICI "],
    {
      A: "create:andesite_alloy",
      I: "#forge:plates/iron",
      W: "immersiveengineering:wirecoil_copper",
      C: "createaddition:capacitor",
      R: "#forge:rods/iron",
    },
  );

  // Remove Create Alloyed's Metal Mixing Recipes
  event.remove({ id: "alloyed:mixing/steel_ingot" });
  event.remove({ id: "alloyed:mixing/bronze_ingot" });
  event.remove({ id: "alloyed:mixing/bronze_ingot_x3" });
};
