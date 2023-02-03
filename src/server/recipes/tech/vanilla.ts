export default (event: Internal.RecipeEventJS) => {
  // Hopper
  event.remove({ output: "minecraft:hopper" });
  event.recipes.minecraft
    .crafting_shaped("minecraft:hopper", ["P P", "PHP", " P "], {
      P: "#forge:plates/iron",
      H: Item.of("immersiveengineering:hammer").ignoreNBT(),
    })
    .damageIngredient("immersiveengineering:hammer");
};
