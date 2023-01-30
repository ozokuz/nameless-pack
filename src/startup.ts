onEvent("item.modification", (event) => {
  // Make it believable that it's a tool
  event.modify("tinkersurvival:mortar_and_pestle", (item) => {
    item.setMaxStackSize(1);
  });
});
