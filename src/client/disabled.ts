onEvent("jei.hide.items", (event) => {
  // Disable some mods temporarily
  event.hide("@functionalstorage");
  event.hide("@prettypipes");

  // Temporarily disable Higher tier Backpacks
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    event.hide(`sophisticatedbackpacks:${material}_backpack`);
  });

  // Temporarily disable excess items from torch master
  event.hide("torchmaster:frozen_pearl");
  event.hide("torchmaster:dreadlamp");
  event.hide("torchmaster:feral_flare_lantern");

  // Temporarily disable excess items from chunkloaders
  event.hide("chunkloaders:basic_chunk_loader");
  event.hide("chunkloaders:advanced_chunk_loader");
  event.hide("chunkloaders:ultimate_chunk_loader");
});
