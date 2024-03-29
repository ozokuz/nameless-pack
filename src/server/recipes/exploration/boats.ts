export default (event: Internal.RecipeEventJS) => {
  ["oak", "birch", "spruce", "jungle", "acacia", "dark_oak"].forEach(
    (material) => {
      // @ts-expect-error dynamic
      event.remove({ output: `minecraft:${material}_boat` });

      event.recipes.minecraft.crafting_shaped(
        // @ts-expect-error dynamic
        `minecraft:${material}_boat`,
        ["MPM", "TTT"],
        {
          M: `minecraft:${material}_planks`,
          P: "immersivepetroleum:upgrade_paddles",
          T: "#forge:treated_wood",
        },
      );
    },
  );
};
