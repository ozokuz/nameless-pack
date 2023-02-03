export default (event: Internal.RecipeEventJS) => {
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
};
