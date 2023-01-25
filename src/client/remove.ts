onEvent("jei.hide.items", (event) => {
  event.hide("notreepunching:flint_knife");
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    ["knife", "mattock"].forEach((tool) => {
      event.hide(`notreepunching:${material}_${tool}`);
    });
  });
  ["wooden", "stone", "iron", "gold", "diamond"].forEach((material) => {
    ["sword", "pickaxe", "shovel", "axe", "hoe"].forEach((tool) => {
      event.hide(`minecraft:${material}_${tool}`);
    });
  });
  event.hide("minecraft:shears");
});
