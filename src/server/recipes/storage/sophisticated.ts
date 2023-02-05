export default (event: Internal.RecipeEventJS) => {
  // Remove Sophisticated Storage unused recipes
  event.remove({ mod: "sophisticatedstorage" });

  // Recipe for Upgrade base
  event.recipes.minecraft
    .crafting_shaped(
      // @ts-expect-error multiple
      "8x sophisticatedstorage:upgrade_base",
      ["PPP", "PCP", "PPP"],
      {
        P: "tconstruct:pattern",
        C: "immersiveengineering:creosote_bucket",
      },
    )
    .replaceIngredient(
      "immersiveengineering:creosote_bucket",
      "minecraft:bucket",
    );

  // Recipe for Upgrade base with spout
  event.recipes.create.filling("sophisticatedstorage:upgrade_base", [
    "tconstruct:pattern",
    {
      fluid: "immersiveengineering:creosote",
      nbt: {},
      amount: 125,
    },
  ]);

  // Recipe for iron chest upgrade
  event.recipes.minecraft.crafting_shaped(
    "sophisticatedstorage:basic_to_iron_tier_upgrade",
    ["IBI", "BTB", "IBI"],
    {
      B: "sophisticatedstorage:upgrade_base",
      T: "create:electron_tube",
      I: "#forge:plates/iron",
    },
  );

  // Recipe for gold chest upgrade
  event.recipes.minecraft.crafting_shaped(
    "sophisticatedstorage:iron_to_gold_tier_upgrade",
    ["GBG", "B B", "GBG"],
    {
      B: "sophisticatedstorage:upgrade_base",
      G: "#forge:plates/gold",
    },
  );
};
