export default (event: Internal.RecipeEventJS) => {
  // Plates Need 2 Ingots
  // TODO: Make this work for all metals
  event.remove({ output: "immersiveengineering:plate_iron" });
  event.recipes.minecraft
    .crafting_shapeless("immersiveengineering:plate_iron", [
      Item.of("immersiveengineering:hammer").ignoreNBT(),
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
    ])
    .damageIngredient("immersiveengineering:hammer");
};
