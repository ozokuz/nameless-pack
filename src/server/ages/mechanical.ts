onEvent("recipes", (event) => {
  // Harder Andesite Alloy
  event.remove({ output: "create:andesite_alloy" });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "minecraft:andesite",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_iron",
      amount: 30,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "minecraft:andesite",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_zinc",
      amount: 10,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "tconstruct:seared_stone",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_iron",
      amount: 30,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
  event.custom({
    type: "tconstruct:casting_basin",
    // @ts-expect-error custom
    cast: {
      item: "tconstruct:seared_stone",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:molten_zinc",
      amount: 10,
    },
    result: "create:andesite_alloy",
    cooling_time: 40,
  });
});
