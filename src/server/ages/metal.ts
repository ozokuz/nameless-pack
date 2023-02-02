import recipes from "../helpers/recipes";

onEvent("recipes", (event) => {
  // Plates Need 2 Ingots
  // TODO: Make this work for all metals
  event.remove({ output: "immersiveengineering:plate_iron" });
  event.recipes.minecraft
    .crafting_shapeless("immersiveengineering:plate_iron", [
      Item.of("immersiveengineering:hammer").ignoreNBT(),
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
    ])
    .damageIngredient("immersiveengineering:hammer");

  // Bucket
  event.remove({
    output: "minecraft:bucket",
    type: "minecraft:crafting_shaped",
  });
  // TODO: Replace this with custom bucket cast
  event.recipes.minecraft
    .crafting_shaped("minecraft:bucket", ["PHP", " P "], {
      P: "#forge:plates/iron",
      H: Item.of("immersiveengineering:hammer").ignoreNBT(),
    })
    .damageIngredient("immersiveengineering:hammer");

  // Hopper
  event.remove({ output: "minecraft:hopper" });
  event.recipes.minecraft
    .crafting_shaped("minecraft:hopper", ["P P", "PHP", " P "], {
      P: "#forge:plates/iron",
      H: Item.of("immersiveengineering:hammer").ignoreNBT(),
    })
    .damageIngredient("immersiveengineering:hammer");

  // Stonecutter
  event.remove({ output: "minecraft:stonecutter" });
  event.recipes.minecraft
    .crafting_shaped("minecraft:stonecutter", [" H ", " P ", "SSS"], {
      P: "#forge:plates/iron",
      H: Item.of("immersiveengineering:hammer").ignoreNBT(),
      S: "minecraft:smooth_stone",
    })
    .damageIngredient("immersiveengineering:hammer");

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

  // Remove normal Lantern recipe
  event.remove({
    output: "minecraft:lantern",
    type: "minecraft:crafting_shaped",
  });

  // Roasting Stics to Torches :D
  event.recipes.minecraft.smoking("minecraft:torch", "minecraft:stick");

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

  // Kiln Brick
  event.remove({ output: "immersiveengineering:alloybrick" });
  event.recipes.minecraft.crafting_shaped(
    // @ts-expect-error multiple
    "2x immersiveengineering:alloybrick",
    ["SB", "BS"],
    {
      S: "#forge:sandstone",
      B: "minecraft:nether_brick",
    },
  );

  // Smeltery Controller
  event.remove({ output: "tconstruct:smeltery_controller" });
  event.custom({
    // @ts-expect-error retextured
    type: "tconstruct:retextured_casting_basin",
    cast: {
      tag: "tconstruct:smeltery_bricks",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_rose_gold",
      amount: 360,
    },
    result: "tconstruct:smeltery_controller",
    cooling_time: 100,
  });

  ["oak", "birch", "spruce", "jungle", "acacia", "dark_oak"].forEach(
    (material) => {
      // @ts-expect-error dynamic
      event.remove({ output: `minecraft:${material}_boat` });
      // @ts-expect-error dynamic
      event.remove({ output: `boatload:large_${material}_boat` });

      event.recipes.minecraft.crafting_shaped(
        // @ts-expect-error dynamic
        `minecraft:${material}_boat`,
        ["MPM", "TTT"],
        {
          M: `minecraft:${material}_planks`,
          P: "immersivepetroleum:upgrade_paddles",
          T: "#forge:treated_wood",
        },
      );
      event.recipes.minecraft.crafting_shaped(
        // @ts-expect-error dynamic
        `boatload:large_${material}_boat`,
        ["MBM", "TTT"],
        {
          M: `minecraft:${material}_planks`,
          B: `minecraft:${material}_boat`,
          T: "#forge:treated_wood",
        },
      );
    },
  );

  // Recipe for Upgrade base
  event.recipes.minecraft
    .crafting_shaped(
      "sophisticatedstorage:upgrade_base",
      ["PPP", "PCP", "PPP"],
      {
        P: "tconstruct:pattern",
        C: "immersiveengineering:creosote_bucket",
      },
    )
    .replaceIngredient(
      "immersiveengineering:creosote_bucket",
      "minecraft:bucket",
    );
});
