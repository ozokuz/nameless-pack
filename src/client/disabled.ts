onEvent("jei.hide.items", (event) => {
  // Disable Probe for now
  event.hide("@theoneprobe");

  // Disable Boats for now
  event.hide("#minecraft:boats");

  // Disable Higher tier Backpacks for now
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    event.hide(`sophisticatedbackpacks:${material}_backpack`);
  });
});
