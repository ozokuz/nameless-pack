onEvent("jei.hide.items", (event) => {
  // Temporarily disable some mods
  event.hide("@pneumaticcraft");
  event.hide("@compressedcreativity");

  // Temporarily disable Higher tier Backpacks
  ["diamond", "netherite"].forEach((material) => {
    event.hide(`sophisticatedbackpacks:${material}_backpack`);
  });

  // Temporarily disable excess items from torch master
  event.hide("torchmaster:frozen_pearl");
  event.hide("torchmaster:dreadlamp");
  event.hide("torchmaster:feral_flare_lantern");

  // Temporarily disable excess items from chunkloaders
  event.hide("chunkloaders:advanced_chunk_loader");
  event.hide("chunkloaders:ultimate_chunk_loader");
});
