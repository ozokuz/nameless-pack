onEvent("recipes", (event) => {
  // Casings
  event.remove({ output: "create:andesite_casing" });
  event.remove({ output: "create:copper_casing" });
  event.remove({ output: "create:brass_casing" });

  event.recipes.create.item_application("create:andesite_casing", [
    "#forge:treated_wood",
    "create:andesite_alloy",
  ]);
  event.recipes.create.item_application("create:copper_casing", [
    "#forge:treated_wood",
    "#forge:plates/copper",
  ]);
  event.recipes.create.item_application("create:brass_casing", [
    "#forge:treated_wood",
    "#forge:plates/brass",
  ]);

  // Cogs
  event.remove({ output: "create:cogwheel" });
  event.remove({ output: "create:large_cogwheel" });

  event.recipes.minecraft.crafting_shapeless("create:cogwheel", [
    "create:shaft",
    "#forge:treated_wood",
  ]);
  event.recipes.minecraft.crafting_shapeless("create:large_cogwheel", [
    "create:cogwheel",
    "#forge:treated_wood",
  ]);
  event.recipes.minecraft.crafting_shapeless("create:large_cogwheel", [
    "create:shaft",
    "#forge:treated_wood",
    "#forge:treated_wood",
  ]);

  event.custom({
    type: "create:deploying",
    // @ts-expect-error custom
    ingredients: [
      {
        item: "create:shaft",
      },
      {
        tag: "forge:treated_wood",
      },
    ],
    results: [
      {
        item: "create:cogwheel",
      },
    ],
  });

  event.custom({
    type: "create:deploying",
    // @ts-expect-error custom
    ingredients: [
      {
        item: "create:cogwheel",
      },
      {
        tag: "forge:treated_wood",
      },
    ],
    results: [
      {
        item: "create:large_cogwheel",
      },
    ],
  });

  // Mechanical Saw
  event.remove({ output: "create:mechanical_saw" });
  event.recipes.minecraft.crafting_shapeless("create:mechanical_saw", [
    "create:andesite_casing",
    "immersiveengineering:sawblade",
  ]);
});
