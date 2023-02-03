export default (event: Internal.RecipeEventJS) => {
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
      S: "#forge:bookshelves",
      I: "immersiveengineering:ingot_steel",
    },
  );
};
