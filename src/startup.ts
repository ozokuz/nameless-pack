onEvent("item.modification", (event) => {
  // Make it believable that it's a tool
  event.modify("tinkersurvival:mortar_and_pestle", (item) => {
    item.setMaxStackSize(1);
  });
});

onEvent("item.tags", (event) => {
  event.add("nameless:stupid_wood_tag", "minecraft:logs_that_burn");
});
