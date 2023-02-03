export default (event: Internal.RecipeEventJS) => {
  // Harder Probe
  event.remove({ output: "theoneprobe:probe" });
  event.recipes.minecraft.crafting_shaped(
    "theoneprobe:probe",
    [" ER", "PCP", " S "],
    {
      E: "immersiveengineering:component_electronic_adv",
      R: "#forge:rods/iron",
      P: "#forge:plates/aluminum",
      C: "pneumaticcraft:printed_circuit_board",
      S: "immersiveengineering:component_steel",
    },
  );
};
