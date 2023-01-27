onEvent("jei.hide.items", (event) => {
  // Disable some mods temporarily
  event.hide("@theoneprobe");
  event.hide("@sophisticatedstorage");
  event.hide("@functionalstorage");
  event.hide("@prettypipes");
  event.hide("@torchmaster");
  event.hide("@chunkloaders");

  // Disable Boats for now
  event.hide("#minecraft:boats");

  // Disable Higher tier Backpacks for now
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    event.hide(`sophisticatedbackpacks:${material}_backpack`);
  });
});
