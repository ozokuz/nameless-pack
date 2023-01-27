onEvent("recipes", (event) => {
  event.remove({ output: "theoneprobe:probe" });
  // event.recipes.minecraft.crafting_shaped("theoneprobe:probe", [], {});
});
