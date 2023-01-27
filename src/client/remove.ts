onEvent("jei.hide.items", (event) => {
  event.hide("tconstruct:seared_heater");

  // Remove Vanilla Tools
  event.hide("minecraft:shears");
  ["sword", "pickaxe", "shovel", "axe", "hoe"].forEach((tool) => {
    ["wooden", "stone", "iron", "golden", "diamond", "netherite"].forEach(
      (material) => {
        event.hide(`minecraft:${material}_${tool}`);
      },
    );
  });

  // Remove Vanilla Armors
  ["helmet", "chestplate", "leggings", "boots"].forEach((armor) => {
    ["leather", "iron", "chainmail", "golden", "diamond", "netherite"].forEach(
      (material) => {
        event.hide(`minecraft:${material}_${armor}`);
      },
    );
  });

  // Remove Sewing Kit Easy Needles
  ["wood", "stone", "bone", "gold"].forEach((material) => {
    event.hide(`sewingkit:${material}_sewing_needle`);
  });

  // Remove Boats for now
  event.hide("#minecraft:boats");

  // Remove Higher tier Backpacks for now
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    event.hide(`sophisticatedbackpacks:${material}_backpack`);
  });
});
