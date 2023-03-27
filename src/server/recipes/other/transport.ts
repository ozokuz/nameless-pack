import recipes from "../../helpers/recipes";

export default (event: Internal.RecipeEventJS) => {
  // Elevator in midgame
  event.remove({ id: "elevatorid:elevator_white" });
  event.recipes.minecraft.crafting_shaped(
    "elevatorid:elevator_white",
    ["IWI", "PMP", "IFI"],
    {
      I: "#forge:plates/iron",
      W: "minecraft:white_wool",
      P: "pneumaticcraft:plastic",
      M: "botania:mana_pearl",
      F: "pneumaticcraft:printed_circuit_board",
    },
  );

  // Travel Anchors are available after midgame too
  event.remove({ output: "travel_anchors:travel_anchor" });
  recipes.tconstruct
    .casting_basin("travel_anchors:travel_anchor", "#forge:ender", 500, event)
    .cast("compressedcreativity:compressed_iron_casing")
    .consumeCast()
    .coolingTime(40);
  event.recipes.thermal.bottler("travel_anchors:travel_anchor", [
    "compressedcreativity:compressed_iron_casing",
    {
      fluid: "tconstruct:molten_ender",
      amount: 500,
    },
  ]);
  event.recipes.thermal.bottler("travel_anchors:travel_anchor", [
    "compressedcreativity:compressed_iron_casing",
    {
      fluid: "thermal:ender",
      amount: 500,
    },
  ]);

  // Travel Staff
  event.remove({ output: "travel_anchors:travel_staff" });
  event.recipes.minecraft.crafting_shaped(
    "travel_anchors:travel_staff",
    [" CP", " SC", "R  "],
    {
      C: "beyond_earth:compressed_steel",
      P: "minecraft:ender_pearl",
      S: "hexcasting:wand_akashic",
      R: "#forge:rods/aluminum",
    },
  );
};
