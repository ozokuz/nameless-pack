onEvent("recipes", (event) => {
  // Disable some mods temporarily
  //event.remove({ mod: "theoneprobe" });
  event.remove({ mod: "sophisticatedstorage" });
  event.remove({ mod: "functionalstorage" });
  event.remove({ mod: "prettypipes" });
  //event.remove({ mod: "torchmaster" });
  //event.remove({ mod: "chunkloaders" });

  // Temporarily disable Higher tier Backpacks
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    // @ts-expect-error dynamic
    event.remove({ output: `sophisticatedbackpacks:${material}_backpack` });
  });
});
