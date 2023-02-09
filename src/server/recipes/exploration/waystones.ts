export default (event: Internal.RecipeEventJS) => {
  // Harder Warp Stone
  event.remove({ output: "waystones:warp_stone" });
  event.recipes.minecraft.crafting_shaped(
    "waystones:warp_stone",
    ["SAD", "MBM", "DAS"],
    {
      S: "ars_nouveau:source_gem",
      A: "ars_nouveau:abjuration_essence",
      D: "hexcasting:amethyst_dust",
      B: "bloodmagic:blankslate",
      M: "botania:mana_pearl",
    },
  );
};
