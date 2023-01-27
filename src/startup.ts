onEvent("item.modification", (event) => {
  // Make it believable that it's a tool
  // @ts-expect-error until type regeneration
  event.modify("tinkersurival:mortar_and_pestle", (item) => {
    item.setMaxStackSize(1);
  });
});
