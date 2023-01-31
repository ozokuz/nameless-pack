onEvent("recipes", (event) => {
  // Temporarily disable some mods
  event.remove({ mod: "prettypipes" });

  // Temporarily disable Higher tier Backpacks
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    // @ts-expect-error dynamic
    event.remove({ output: `sophisticatedbackpacks:${material}_backpack` });
  });

  // Temporarily disable excess items from torch master
  event.remove({ output: "torchmaster:frozen_pearl" });
  event.remove({ output: "torchmaster:dreadlamp" });
  event.remove({ output: "torchmaster:feral_flare_lantern" });

  // Temporarily disable excess items from chunkloaders
  event.remove({ output: "chunkloaders:basic_chunk_loader" });
  event.remove({ output: "chunkloaders:advanced_chunk_loader" });
  event.remove({ output: "chunkloaders:ultimate_chunk_loader" });
});
