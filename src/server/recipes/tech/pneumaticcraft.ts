export default (event: Internal.RecipeEventJS) => {
  // Remove PneumaticCraft's Refinery
  event.remove({ type: "pneumaticcraft:refinery" });
  event.remove({ id: "pneumaticcraft:refinery" });
  event.remove({ id: "pneumaticcraft:refinery_output" });

  // Remove PneumaticCraft's Thermopneumatic Processing Plant
  event.remove({ type: "pneumaticcraft:thermo_plant" });
  event.remove({ id: "pneumaticcraft:thermopneumatic_processing_plant" });

  // Gated Reinforced Stone
  event.remove({ id: "pneumaticcraft:reinforced_stone" });
  event.recipes.minecraft.crafting_shaped(
    // @ts-expect-error multiple
    "4x pneumaticcraft:reinforced_stone",
    ["ISI", "SCS", "ISI"],
    {
      I: "#forge:ingots/compressed_iron",
      S: "minecraft:stone",
      C: "immersiveengineering:steel_scaffolding_standard",
    },
  );

  // No Explosion Crafting
  event.remove({ type: "pneumaticcraft:explosion_crafting" });

  // Dark Steel
  event.remove({
    output: "pneumaticcraft:ingot_iron_compressed",
    type: "pneumaticcraft:pressure_chamber",
  });
  event.recipes.immersiveengineering.arc_furnace(
    ["pneumaticcraft:ingot_iron_compressed"],
    "#forge:ingots/steel",
    ["immersiveengineering:dust_hop_graphite"],
  );
  event.recipes.thermal.smelter("pneumaticcraft:ingot_iron_compressed", [
    "#forge:ingots/steel",
    "immersiveengineering:dust_hop_graphite",
  ]);
};
