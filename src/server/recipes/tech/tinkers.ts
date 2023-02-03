export default (event: Internal.RecipeEventJS) => {
  // Remove Seared Heater
  event.remove({
    output: "tconstruct:seared_heater",
  });

  // Smeltery Controller
  event.remove({ output: "tconstruct:smeltery_controller" });
  event.custom({
    // @ts-expect-error retextured
    type: "tconstruct:retextured_casting_basin",
    cast: {
      tag: "tconstruct:smeltery_bricks",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_rose_gold",
      amount: 360,
    },
    result: "tconstruct:smeltery_controller",
    cooling_time: 100,
  });
};
