import recipes from "../../helpers/recipes";

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
  event.remove({
    output: "create:andesite_alloy",
    type: "tconstruct:casting_basin",
  });
  recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_iron", 30, event)
    .cast("tconstruct:seared_stone")
    .consumeCast()
    .coolingTime(40);
  recipes.tconstruct.alloy(
    "kubejs:seared_alloy",
    90,
    [
      {
        tag: "forge:molten_iron",
        amount: 10,
      },
      {
        tag: "tconstruct:seared_stone",
        amount: 250,
      },
    ],
    1000,
    event,
  );
  recipes.tconstruct
    .casting_table("create:andesite_alloy", "kubejs:seared_alloy", 90, event)
    .multiUseCast("ingot")
    .coolingTime(40);
  recipes.tconstruct
    .casting_table("create:andesite_alloy", "kubejs:seared_alloy", 90, event)
    .singleUseCast("ingot")
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
    [" R ", " S ", "CAC", "CBC"],
    {
      S: "#forge:plates/brass",
      C: "#forge:plates/copper",
      B: "#forge:storage_blocks/copper",
      A: "create:andesite_alloy",
      R: "#forge:rods/steel",
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
    ["  A  ", " IPI ", "IWRWI", " ICI "],
    {
      A: "create:andesite_alloy",
      I: "#forge:plates/iron",
      W: "immersiveengineering:wirecoil_copper",
      C: "createaddition:capacitor",
      R: "#forge:rods/iron",
      P: "create:precision_mechanism",
    },
  );

  // Allow Brass Rods to be made only after getting into Immersive Engineering
  event.remove({
    type: "tconstruct:casting_table",
    output: "createaddition:brass_rod",
  });

  // Mixing Metals
  event.remove({
    output: "create:brass_ingot",
    type: "create:mixing",
    input: "create:zinc_ingot",
  });
  event.remove({ id: "tconstruct:smeltery/alloys/molten_rose_gold" });
  event.remove({ id: "tconstruct:smeltery/alloys/molten_brass" });
  event.recipes.create
    .mixing({ fluid: "tconstruct:molten_rose_gold", amount: 360 }, [
      { fluidTag: "forge:molten_gold", amount: 90 },
      { fluidTag: "forge:molten_copper", amount: 270 },
    ])
    .heated();
  event.recipes.create
    .mixing({ fluid: "tconstruct:molten_brass", amount: 180 }, [
      { fluidTag: "forge:molten_copper", amount: 90 },
      { fluidTag: "forge:molten_zinc", amount: 90 },
    ])
    .heated();
};
