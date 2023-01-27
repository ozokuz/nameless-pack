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

  // Remove Boats for now
  event.remove({ output: "#minecraft:boats" });

  // Remove Higher tier Backpacks for now
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    // @ts-expect-error dynamic
    event.remove({ output: `sophisticatedbackpacks:${material}_backpack` });
  });
});
