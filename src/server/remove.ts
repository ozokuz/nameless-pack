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

  // Remove Vanilla Metal Tools
  const material = ["iron", "gold", "diamond"];
  const toolType = ["sword", "pickaxe", "shovel", "axe", "hoe"];
  event.remove({ output: "minecraft:shears" });

  toolType.forEach((tool) => {
    material.forEach((material) => {
      // @ts-expect-error dynamic
      event.remove({ output: `minecraft:${material}_${tool}` });
    });
  });
});
