onEvent("recipes", (event) => {
  // Harder Andesite Alloy
  event.remove({
    output: "create:andesite_alloy",
    type: "minecraft:crafting_shaped",
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

  // Quark Crate
  event.remove({ output: "quark:crate" });
  event.recipes.minecraft.crafting_shaped(
    "quark:crate",
    ["PSP", "RPR", "PSP"],
    {
      P: "#forge:treated_wood",
      S: "#forge:plates/iron",
      R: "#forge:rods/iron",
    },
  );

  // Harder Warp Stone
  event.remove({ output: "waystones:warp_stone" });
  event.recipes.minecraft.crafting_shaped(
    "waystones:warp_stone",
    ["SAD", "EBM", "DRS"],
    {
      S: "ars_nouveau:source_gem",
      A: "ars_nouveau:abjuration_essence",
      D: "hexcasting:amethyst_dust",
      E: "minecraft:ender_eye",
      B: "bloodmagic:blankslate",
      M: "botania:mana_pearl",
      R: "forbidden_arcanus:rune",
    },
  );

  // Spellbook With Tinker's Tools
  event.remove({ output: "ars_nouveau:novice_spell_book" });
  event.recipes.minecraft.crafting_shaped(
    "ars_nouveau:novice_spell_book",
    ["MAG", "PBP", "SAI"],
    {
      M: "botania:manasteel_ingot",
      A: "hexcasting:amethyst_dust",
      G: "ars_nouveau:source_gem",
      P: "create:brass_sheet",
      B: "minecraft:book",
      S: "minecraft:bookshelf",
      I: "immersiveengineering:ingot_steel",
    },
  );

  // Better Mega torch
  event.remove({ output: "torchmaster:megatorch" });
  event.recipes.minecraft.crafting_shaped(
    "torchmaster:megatorch",
    ["MBD", "PFP", "SHS"],
    {
      M: "ars_nouveau:manipulation_essence",
      B: Item.of("bloodmagic:basemonstersoul").ignoreNBT(),
      D: "hexcasting:amethyst_dust",
      P: "#forge:plates/brass",
      F: "botania:fire_rod",
      S: "immersiveengineering:stick_treated",
      H: Item.of("tconstruct:tough_handle", '{Material:"tconstruct:steel"}'),
    },
  );

  // Better framed 1x1 drawers
  event.remove({ output: "functionalstorage:framed_1" });
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_1",
    ["R R", " M ", "R R"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
    },
  );

  // Better framed 1x2 drawers
  event.remove({ output: "functionalstorage:framed_2" });
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_2",
    ["R R", "CMC", "R R"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
      C: "minecraft:chain",
    },
  );

  // Better framed 2x2 drawers
  event.remove({ output: "functionalstorage:framed_4" });
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:framed_4",
    ["RCR", "CMC", "RCR"],
    {
      R: "#forge:rods/iron",
      M: "createdeco:cast_iron_mesh_fence",
      C: "minecraft:chain",
    },
  );

  // Better framed compacting drawers
  event.remove({ output: "functionalstorage:compacting_framed_drawer" });
  event.recipes.minecraft.crafting_shaped(
    "functionalstorage:compacting_framed_drawer",
    ["RTR", "IPI", "RMR"],
    {
      R: "#forge:rods/iron",
      T: "create:electron_tube",
      I: "minecraft:iron_ingot",
      P: "create:precision_mechanism",
      M: "createdeco:cast_iron_mesh_fence",
    },
  );

  // Recipe for Upgrade base with spout
  event.recipes.create.filling("sophisticatedstorage:upgrade_base", [
    "tconstruct:pattern",
    {
      fluid: "immersiveengineering:creosote",
      nbt: {},
      amount: 125,
    },
  ]);

  // Recipe for iron chest upgrade
  event.recipes.minecraft.crafting_shaped(
    "sophisticatedstorage:basic_to_iron_tier_upgrade",
    ["IPI", "PTP", "IPI"],
    {
      P: "tconstruct:pattern",
      T: "create:electron_tube",
      I: "#forge:plates/iron",
    },
  );

  // Recipe for gold chest upgrade
  event.recipes.minecraft.crafting_shaped(
    "sophisticatedstorage:iron_to_gold_tier_upgrade",
    ["GBG", "B B", "GBG"],
    {
      B: "sophisticatedstorage:basic_to_iron_tier_upgrade",
      T: "create:electron_tube",
      G: "#forge:plates/gold",
    },
  );
});
