export default (event: Internal.RecipeEventJS) => {
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
};
