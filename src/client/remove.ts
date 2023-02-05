onEvent("jei.hide.items", (event) => {
  // Remove everything from Create Crafts & Additions
  event.hide("@createaddition");

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

  // Remove excess The One Probe items
  event.hide("theoneprobe:creativeprobe");
  event.hide("theoneprobe:probenote");
  event.hide("theoneprobe:diamond_helmet_probe");
  event.hide("theoneprobe:gold_helmet_probe");
  event.hide("theoneprobe:iron_helmet_probe");

  // Remove Sophisticated Storage Unused Recipes
  event.hide("@sophisticatedstorage");
});

onEvent("jei.add.items", (event) => {
  // Re-add some of Create Crafts & Additions' Electricity Things
  event.add("createaddition:zinc_sheet");
  event.add("createaddition:alternator");
  event.add("createaddition:capacitor");

  // Adding Sophisticated Storage Items
  event.add("sophisticatedstorage:upgrade_base");
  event.add("sophisticatedstorage:basic_to_iron_tier_upgrade");
  event.add("sophisticatedstorage:iron_to_gold_tier_upgrade");
});
