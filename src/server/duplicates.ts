onEvent("recipes", (event) => {
  // Remove easier gravel -> flint recipe
  event.remove({
    output: "minecraft:flint",
    type: "minecraft:crafting_shapeless",
  });
  event.shapeless("minecraft:flint", [
    "minecraft:gravel",
    "minecraft:gravel",
    "minecraft:gravel",
  ]);
});
