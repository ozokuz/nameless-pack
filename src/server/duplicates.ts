import recipes from "./helpers/recipes";

onEvent("recipes", (event) => {
  // Remove easier gravel -> flint recipe
  event.remove({
    output: "minecraft:flint",
    type: "minecraft:crafting_shapeless",
  });
  event.recipes.minecraft.crafting_shapeless("minecraft:flint", [
    "minecraft:gravel",
    "minecraft:gravel",
    "minecraft:gravel",
  ]);

  // No Tree Punching Clay Bucket to Ceramics Bucket
  event.remove({
    output: "notreepunching:ceramic_bucket",
  });
  event.remove({
    output: "ceramics:unfired_clay_bucket",
  });
  event.remove({
    output: "ceramics:empty_clay_bucket",
  });
  event.recipes.minecraft.campfire_cooking(
    "ceramics:empty_clay_bucket",
    "notreepunching:clay_bucket",
  );
  recipes.ceramics.kiln(
    "ceramics:empty_clay_bucket",
    "notreepunching:clay_bucket",
    event,
  );
});
