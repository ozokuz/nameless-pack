import recipes from "../../helpers/recipes";

export default (event: Internal.RecipeEventJS) => {
  // Remove Hammer
  event.remove({ output: "beyond_earth:hammer" });

  // Remove useless machines
  event.remove({ output: "beyond_earth:solar_panel" });
  event.remove({ output: "beyond_earth:coal_generator" });
  event.remove({ output: "beyond_earth:compressor" });
  event.remove({ output: "beyond_earth:fuel_refinery" });
  event.remove({ output: "beyond_earth:water_pump" });
  event.remove({ type: "beyond_earth:fuel_refinery" });

  // Remove awful plate recipes
  event.remove({ output: "beyond_earth:iron_plate" });
  event.remove({
    output: "beyond_earth:desh_plate",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "beyond_earth:desh_plate",
    type: "minecraft:crafting_shapeless",
  });

  // Compress in Pressure Chamber
  event.remove({ type: "beyond_earth:compressor" });
  event.remove({
    // @ts-expect-error type update
    input: "beyond_earth_giselle_addon:press_compressing_die",
    type: "thermal:press",
  });
  event.remove({
    // @ts-expect-error type update
    mod: "beyond_earth_giselle_addon",
    type: "immersiveengineering:metal_press",
  });
  event.remove({
    mod: "jaopca",
    type: "immersiveengineering:metal_press",
  });
  recipes.pneumaticcraft.pressure_chamber(
    // @ts-expect-error type update
    ["jaopca:beyond_earth_compresseds.iron"],
    ["forge:ingots/iron"],
    3.0,
    event,
  );
  recipes.pneumaticcraft.pressure_chamber(
    ["beyond_earth:compressed_steel"],
    ["forge:ingots/steel"],
    3.0,
    event,
  );
  recipes.pneumaticcraft.pressure_chamber(
    ["beyond_earth:compressed_desh"],
    ["forge:ingots/desh"],
    3.0,
    event,
  );
};
