onEvent("jei.hide.items", (event) => {
  ["wooden", "stone", "iron", "gold", "diamond"].forEach((material) => {
    ["sword", "pickaxe", "shovel", "axe", "hoe"].forEach((tool) => {
      event.hide(`minecraft:${material}_${tool}`);
    });
  });
  event.hide("minecraft:shears");
});
