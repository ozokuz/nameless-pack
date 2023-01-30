onEvent("jei.hide.items", (event) => {
  // Remove Seared Heater
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

  // Remove Immersive Engineering Crates
  event.hide("engineersdecor:labeled_crate");
  event.hide("immersiveengineering:crate");
  event.hide("immersiveengineering:reinforced_crate");

  // Remove excess The One probe items
  event.hide("theoneprobe:creativeprobe");
  event.hide("theoneprobe:probenote");
  event.hide("theoneprobe:diamond_helmet_probe");
  event.hide("theoneprobe:gold_helmet_probe");
  event.hide("theoneprobe:iron_helmet_probe");
});
