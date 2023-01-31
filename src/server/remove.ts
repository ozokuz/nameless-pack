onEvent("recipes", (event) => {
  // Remove easier atlas recipe
  event.remove({
    output: "antiqueatlas:empty_antique_atlas",
    input: "minecraft:book",
  });

  // Remove ore -> ingot furnace recipe
  event.remove({
    type: "minecraft:smelting",
    input: "#forge:raw_materials",
  });

  // Remove Engineers Hammer + Ore -> Dust recipe
  event.remove({
    input: "immersiveengineering:hammer",
    output: "#forge:dusts",
  });

  // Remove Seared Heater
  event.remove({
    output: "tconstruct:seared_heater",
  });

  // Remove Vanilla Tools
  event.remove({ output: "minecraft:shears" });
  ["sword", "pickaxe", "shovel", "axe", "hoe"].forEach((tool) => {
    ["wooden", "stone", "iron", "golden", "diamond", "netherite"].forEach(
      (material) => {
        // @ts-expect-error dynamic
        event.remove({ output: `minecraft:${material}_${tool}` });
      },
    );
  });

  // Remove Vanilla Armors
  ["helmet", "chestplate", "leggings", "boots"].forEach((armor) => {
    ["leather", "iron", "chainmail", "golden", "diamond", "netherite"].forEach(
      (material) => {
        // @ts-expect-error dynamic
        event.remove({ output: `minecraft:${material}_${armor}` });
      },
    );
  });

  // Remove Sewing Kit Easy Needles
  ["wood", "stone", "bone", "gold"].forEach((material) => {
    event.remove({
      // @ts-expect-error dynamic
      output: `sewingkit:${material}_sewing_needle`,
      type: "minecraft:crafting_shapeless",
    });
  });

  // Remove Immersive Engineering Crates
  event.remove({ output: "engineersdecor:labeled_crate" });
  event.remove({ output: "immersiveengineering:crate" });
  event.remove({ output: "immersiveengineering:reinforced_crate" });

  // Remove stupid iron stick recipes
  event.remove({ output: "car:iron_stick" });
  event.remove({
    output: "#forge:rods/all_metal",
    type: "minecraft:crafting_shaped",
  });

  // Remove Functional Storage's Wood Drawers
  [
    "oak",
    "birch",
    "spruce",
    "junge",
    "dark_oak",
    "acacia",
    "crimson",
    "warped",
  ].forEach((material) => {
    [1, 2, 4].forEach((size) => {
      // @ts-expect-error dynamic
      event.remove({ output: `functionalstorage:${material}_${size}` });
    });
  });

  // Remove Functional Storage's Compacting Drawers
  event.remove({ output: "functionalstorage:compacting_drawer" });
  event.remove({ output: "functionalstorage:simple_compacting_drawer" });

  // Remove Sophisticated Storage unused recipes
  event.remove({ mod: "sophisticatedstorage" });
});
