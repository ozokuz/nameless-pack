onEvent("recipes", (event) => {
  // Remove easier atlas recipe
  event.remove({
    // @ts-expect-error
    output: "antiqueatlas:empty_antique_atlas",
    input: "minecraft:book",
  });

  // Remove ore -> ingot furnace recipe
  event.remove({
    type: "minecraft:smelting",
    input: "#forge:raw_materials",
  });

  // Remove Vanilla Metal Tools
  const material = ["iron", "gold"];
  const toolType = ["sword", "pickaxe", "shovel", "axe", "hoe"];
  event.remove({ output: "minecraft:shears" });

  toolType.forEach((tool) => {
    material.forEach((material) => {
      // @ts-expect-error
      event.remove({ output: `minecraft:${material}_${tool}` });
    });
  });
});
