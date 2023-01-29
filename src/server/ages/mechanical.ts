onEvent("recipes", (event) => {
  // Harder Andesite Alloy
  event.remove({ output: "create:andesite_alloy" });
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
  const ars_book_tool_materials =
    '{tic_materials: ["tconstruct:iron", "tconstruct:wood", "tconstruct:wood"]}';
  event.remove({ output: "ars_nouveau:novice_spell_book" });
  event.recipes.minecraft.crafting_shaped(
    "ars_nouveau:novice_spell_book",
    ["ADM", "XBX", "SDP"],
    {
      D: "hexcasting:amethyst_dust",
      X: "#forge:plates/brass",
      B: "minecraft:book",
      A: Item.of("tconstruct:hand_axe", ars_book_tool_materials),
      M: Item.of("tconstruct:mattock", ars_book_tool_materials),
      S: Item.of("tconstruct:sword", ars_book_tool_materials),
      P: Item.of("tconstruct:pickaxe", ars_book_tool_materials),
    },
  );

  //Better Mega torch
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
});
