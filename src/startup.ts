onEvent("item.modification", (event) => {
  // Make it believable that it's a tool
  event.modify("tinkersurvival:mortar_and_pestle", (item) => {
    item.setMaxStackSize(1);
  });
});

onEvent("fluid.tags", (event) => {
  event.remove(
    "forge:ethanol",
    "createaddition:bioethanol",
    "createaddition:flowing_bioethanol",
  );
  event.remove(
    "forge:plantoil",
    "createaddition:seed_oil",
    "createaddition:flowing_seed_oil",
  );
});
