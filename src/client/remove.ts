onEvent("jei.hide.items", (event) => {
  // Remove Seared Heater
  event.hide("tconstruct:seared_heater");

  // Remove Plate, Gear & Wire Casts
  ["plate", "gear", "wire"].forEach((type) => {
    ["_sand", "_red_sand", ""].forEach((material) => {
      event.hide(`tconstruct:${type}${material}_cast`);
    });
  });

  // Remove IE's Early Game Power Generation
  event.hide("immersiveengineering:dynamo");
  event.hide("immersiveengineering:windmill");
  event.hide("immersiveengineering:watermill");
  event.hide("immersiveengineering:windmill_blade");
  event.hide("immersiveengineering:windmill_sail");
  event.hide("immersiveengineering:waterwheel_segment");

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

  // Remove Immersive Engineering Kiln
  event.hide("immersiveengineering:slab_alloybrick");
  event.hide("immersiveengineering:alloybrick");

  // Remove excess The One Probe items
  event.hide("theoneprobe:creativeprobe");
  event.hide("theoneprobe:probenote");
  event.hide("theoneprobe:diamond_helmet_probe");
  event.hide("theoneprobe:gold_helmet_probe");
  event.hide("theoneprobe:iron_helmet_probe");

  // Remove everything from Create Crafts & Additions
  event.hide("@createaddition");

  // Remove everything from Sophisticated Storage
  event.hide("@sophisticatedstorage");

  // Remove Functional Storage's Wood Drawers
  [
    "oak",
    "birch",
    "spruce",
    "jungle",
    "dark_oak",
    "acacia",
    "crimson",
    "warped",
  ].forEach((material) => {
    [1, 2, 4].forEach((size) => {
      event.hide(`functionalstorage:${material}_${size}`);
    });
  });

  // Remove Functional Storage's Compacting Drawers
  event.hide("functionalstorage:compacting_drawer");
  event.hide("functionalstorage:simple_compacting_drawer");

  // Remove Functional Storage's Fluid Drawers
  event.hide("functionalstorage:fluid_1");
  event.hide("functionalstorage:fluid_2");
  event.hide("functionalstorage:fluid_4");

  // Remove PneumaticCraft's Refinery
  event.hide("pneumaticcraft:refinery");
  event.hide("pneumaticcraft:refinery_output");

  // Remove PneumaticCraft's Thermopneumatic Processing Plant
  event.hide("pneumaticcraft:thermopneumatic_processing_plant");
});

onEvent("jei.add.items", (event) => {
  // Re-add some of Create Crafts & Additions' Electricity Things
  event.add("createaddition:zinc_sheet");
  event.add("createaddition:alternator");
  event.add("createaddition:capacitor");
  event.add("createaddition:brass_rod");

  // Adding Sophisticated Storage Items
  event.add("sophisticatedstorage:upgrade_base");
  event.add("sophisticatedstorage:basic_to_iron_tier_upgrade");
  event.add("sophisticatedstorage:iron_to_gold_tier_upgrade");
});
