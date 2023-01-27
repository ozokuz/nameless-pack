onEvent("recipes", (event) => {
  // Disable Probe for now
  event.remove({ mod: "theoneprobe" });

  // Disable Boats for now
  event.remove({ output: "#minecraft:boats" });

  // Disable Higher tier Backpacks for now
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    // @ts-expect-error dynamic
    event.remove({ output: `sophisticatedbackpacks:${material}_backpack` });
  });
});
