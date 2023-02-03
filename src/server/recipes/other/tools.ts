export default (event: Internal.RecipeEventJS) => {
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
};
