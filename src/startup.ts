onEvent("item.modification", (event) => {
  // Make it believable that it's a tool
  event.modify("tinkersurvival:mortar_and_pestle", (item) => {
    item.setMaxStackSize(1);
  });
});

onEvent("item.tags", (event) => {
  // Plant String is also String
  event.add("forge:string", "tinkersurvival:plant_string");
});

onEvent("fluid.registry", (event) => {
  event
    .create("seared_alloy")
    // @ts-expect-error color
    .thickTexture(0x809587)
    // @ts-expect-error color
    .bucketColor(0x809587)
    .displayName("Seared Alloy");
});

onEvent("fluid.tags", (event) => {
  event.remove(
    "forge:ethanol",
    "createaddition:bioethanol",
    "createaddition:flowing_bioethanol",
    "pneumaticcraft:ethanol",
  );
  event.remove(
    "forge:plantoil",
    "createaddition:seed_oil",
    "createaddition:flowing_seed_oil",
  );
});
