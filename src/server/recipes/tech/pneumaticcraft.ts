export default (event: Internal.RecipeEventJS) => {
  // Remove PneumaticCraft's Refinery
  event.remove({ type: "pneumaticcraft:refinery" });
  event.remove({ id: "pneumaticcraft:refinery" });
  event.remove({ id: "pneumaticcraft:refinery_output" });

  // Remove PneumaticCraft's Thermopneumatic Processing Plant
  event.remove({ type: "pneumaticcraft:thermo_plant" });
  event.remove({ id: "pneumaticcraft:thermopneumatic_processing_plant" });
};
