export default (event: Internal.RecipeEventJS) => {
  // Bucket
  event.remove({
    output: "minecraft:bucket",
    type: "minecraft:crafting_shaped",
  });
  // TODO: Replace this with custom bucket cast
  event.recipes.minecraft
    .crafting_shaped("minecraft:bucket", ["PHP", " P "], {
      P: "#forge:plates/iron",
      H: Item.of("immersiveengineering:hammer").ignoreNBT(),
    })
    .damageIngredient("immersiveengineering:hammer");
};
