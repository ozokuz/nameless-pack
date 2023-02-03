export default (event: Internal.RecipeEventJS) => {
  // Stonecutter
  event.remove({ output: "minecraft:stonecutter" });
  event.recipes.minecraft
    .crafting_shaped("minecraft:stonecutter", [" H ", " P ", "SSS"], {
      P: "#forge:plates/iron",
      H: Item.of("immersiveengineering:hammer").ignoreNBT(),
      S: "minecraft:smooth_stone",
    })
    .damageIngredient("immersiveengineering:hammer");
};
