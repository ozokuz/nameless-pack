export default (event: Internal.RecipeEventJS) => {
  // Harder Spellbooks
  event.remove({ output: "ars_nouveau:novice_spell_book" });
  event.remove({ output: "ars_nouveau:apprentice_spell_book" });
  event.remove({ output: "ars_nouveau:archmage_spell_book" });
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
  event.custom({
    type: "ars_nouveau:book_upgrade",
    // @ts-expect-error custom
    ingredients: [
      {
        item: "ars_nouveau:novice_spell_book",
      },
      {
        item: "botania:terrasteel_ingot",
      },
      {
        item: "botania:terrasteel_ingot",
      },
      {
        item: "ars_nouveau:blaze_fiber",
      },
      {
        item: "ars_nouveau:blaze_fiber",
      },
      {
        item: "ars_nouveau:blaze_fiber",
      },
      {
        item: "bloodmagic:infusedslate",
      },
      {
        item: "bloodmagic:infusedslate",
      },
    ],
    result: {
      item: "ars_nouveau:apprentice_spell_book",
    },
  });
  /* event.custom({
    type: "ars_nouveau:book_upgrade",
    ingredients: [
      {
        item: "ars_nouveau:apprentice_spell_book",
      },
      {
        item: "minecraft:nether_star",
      },
      {
        item: "ars_nouveau:wilden_tribute",
      },
      {
        item: "minecraft:emerald",
      },
      {
        item: "minecraft:emerald",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:totem_of_undying",
      },
    ],
    result: {
      item: "ars_nouveau:archmage_spell_book",
    },
  }); */

  // Disable Ars Nouveau's Robes temporarily
  ["novice", "apprentice", "archmage"].forEach((level) => {
    ["boots", "leggings", "robes", "hood"].forEach((type) => {
      // @ts-expect-error dynamic
      event.remove({ output: `ars_nouveau:${level}_${type}` });
    });
  });
};
