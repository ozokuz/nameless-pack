onEvent("recipes", (event) => {
  // Harder Andesite Alloy
  event.remove({ output: "create:andesite_alloy" });
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_iron", 30)
    .cast("minecraft:andesite")
    .consumeCast()
    .coolingTime(40);
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_zinc", 10)
    .cast("minecraft:andesite")
    .consumeCast()
    .coolingTime(40);
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_iron", 30)
    .cast("tconstruct:seared_stone")
    .consumeCast()
    .coolingTime(40);
  // @ts-expect-error docs
  event.recipes.tconstruct
    .casting_basin("create:andesite_alloy", "#forge:molten_zinc", 10)
    .cast("tconstruct:seared_stone")
    .consumeCast()
    .coolingTime(40);

  // Quark Crate
  event.remove({ output: "quark:crate" });
  event.recipes.minecraft.crafting_shaped(
    "quark:crate",
    ["PSP", "RPR", "PSP"],
    {
      P: "#forge:treated_wood",
      S: "#forge:plates/iron",
      R: "#forge:rods/iron",
    },
  );
});
