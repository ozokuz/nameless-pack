import recipes from "../../helpers/recipes";

export default (event: Internal.RecipeEventJS) => {
  // Gate Energy Acceptor behind going to the moon
  event.remove({ id: "ae2:network/blocks/energy_energy_acceptor" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:energy_acceptor",
    ["ISI", "SDS", "ISI"],
    {
      I: "#forge:plates/iron",
      S: "ae2:smooth_sky_stone_block",
      D: "#forge:ingots/desh",
    },
  );

  // Gate ME Controller behind more ae
  event.remove({ output: "ae2:controller" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:controller",
    ["DPD", "CEC", "DPD"],
    {
      D: "beyond_earth:compressed_desh",
      P: "ae2:engineering_processor",
      C: "ae2:fluix_smart_dense_cable",
      E: "ae2:energy_acceptor",
    },
  );

  // Remove cheaty Infinity Booster Card
  event.remove({ output: "ae2wtlib:infinity_booster_card" });

  // Harder AE2 Processors
  event.remove({ type: "ae2:inscriber", input: "minecraft:redstone" });
  const silicon = "ae2:printed_silicon";
  const component = "laserio:logic_chip";
  recipes.ae2.inscriber(
    "ae2:logic_processor",
    {
      middle: component,
      bottom: silicon,
      top: "ae2:printed_logic_processor",
    },
    "press",
    event,
  );
  recipes.ae2.inscriber(
    "ae2:calculation_processor",
    {
      middle: component,
      bottom: silicon,
      top: "ae2:printed_calculation_processor",
    },
    "press",
    event,
  );
  recipes.ae2.inscriber(
    "ae2:engineering_processor",
    {
      middle: component,
      bottom: silicon,
      top: "ae2:printed_engineering_processor",
    },
    "press",
    event,
  );
  recipes.ae2.inscriber(
    "lazierae2:parallel_processor",
    {
      middle: component,
      bottom: silicon,
      top: "lazierae2:parallel_printed",
    },
    "press",
    event,
  );

  // Harder inscriber recipe
  event.remove({ output: "ae2:inscriber" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:inscriber",
    ["IPI", "CLI", "IFI"],
    {
      I: "#forge:plates/iron",
      P: "minecraft:sticky_piston",
      C: "#forge:ingots/copper",
      L: "createdeco:blue_cast_iron_lamp",
      F: "pneumaticcraft:printed_circuit_board",
    },
  );
};
