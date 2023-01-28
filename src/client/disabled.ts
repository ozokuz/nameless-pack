onEvent("jei.hide.items", (event) => {
  // Disable some mods temporarily
  event.hide("@theoneprobe");
  event.hide("@sophisticatedstorage");
  event.hide("@functionalstorage");
  event.hide("@prettypipes");
  event.hide("@torchmaster");
  event.hide("@chunkloaders");

  // Temporarily disable Boats
  event.hide("#minecraft:boats");

  // Temporarily disable Higher tier Backpacks
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    event.hide(`sophisticatedbackpacks:${material}_backpack`);
  });
});
