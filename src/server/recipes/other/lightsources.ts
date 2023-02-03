export default (event: Internal.RecipeEventJS) => {
  // Remove normal Lantern recipe
  event.remove({
    output: "minecraft:lantern",
    type: "minecraft:crafting_shaped",
  });

  // Roasting Stics to Torches :D
  event.recipes.minecraft.smoking("minecraft:torch", "minecraft:stick");

  // Better Mega torch
  event.remove({ output: "torchmaster:megatorch" });
  event.recipes.minecraft.crafting_shaped(
    "torchmaster:megatorch",
    ["MBD", "PFP", "SHS"],
    {
      M: "ars_nouveau:manipulation_essence",
      B: Item.of("bloodmagic:basemonstersoul").ignoreNBT(),
      D: "hexcasting:amethyst_dust",
      P: "#forge:plates/brass",
      F: "botania:fire_rod",
      S: "immersiveengineering:stick_treated",
      H: Item.of("tconstruct:tough_handle", '{Material:"tconstruct:steel"}'),
    },
  );

  // Temporarily disable excess items from torch master
  event.remove({ output: "torchmaster:frozen_pearl" });
  event.remove({ output: "torchmaster:dreadlamp" });
  event.remove({ output: "torchmaster:feral_flare_lantern" });
};
