import recipes from "../../helpers/recipes";

function backpackUpgrade(
  output: Internal.ItemStackJS_,
  pattern: string[],
  keys: Record<
    string,
    { item: Internal.IngredientJS_ } | { tag: Internal.IngredientJS_ }
  >,
  event: Internal.RecipeEventJS,
) {
  event.custom({
    // @ts-expect-error custom
    type: "sophisticatedbackpacks:backpack_upgrade",
    pattern,
    key: Object.fromEntries(
      Object.entries(keys).map(([k, v]) =>
        "tag" in v ? [k, { tag: (v.tag as string).slice(1) }] : [k, v],
      ),
    ),
    result: {
      item: output,
    },
  });
}

export default (event: Internal.RecipeEventJS) => {
  // Temporarily disable Higher tier Backpacks
  event.remove({ output: "sophisticatedbackpacks:backpack" });
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    // @ts-expect-error dynamic
    event.remove({ output: `sophisticatedbackpacks:${material}_backpack` });
  });

  // Leather Backpack
  recipes.sewingkit.sewing(
    "sophisticatedbackpacks:backpack",
    [
      {
        count: 12,
        item: "sewingkit:leather_sheet",
      },
      {
        count: 6,
        item: "sewingkit:leather_strip",
      },
      {
        count: 4,
        tag: "#forge:string",
      },
      {
        count: 1,
        tag: "#forge:plates/iron",
      },
    ],
    event,
  );

  // Backpack Upgrades
  backpackUpgrade(
    "sophisticatedbackpacks:iron_backpack",
    ["FPF", "LBL", "LUL"],
    {
      F: {
        item: "immersiveengineering:hemp_fabric",
      },
      P: {
        tag: "#forge:plates/steel",
      },
      L: {
        item: "sewingkit:leather_sheet",
      },
      B: {
        item: "sophisticatedbackpacks:backpack",
      },
      U: {
        item: "sophisticatedstorage:basic_to_iron_tier_upgrade",
      },
    },
    event,
  );
  backpackUpgrade(
    "sophisticatedbackpacks:gold_backpack",
    ["FPF", "LBL", "LUL"],
    {
      F: {
        item: "immersiveengineering:hemp_fabric",
      },
      P: {
        tag: "#forge:plates/brass",
      },
      L: {
        item: "sewingkit:leather_sheet",
      },
      B: {
        item: "sophisticatedbackpacks:iron_backpack",
      },
      U: {
        item: "sophisticatedstorage:iron_to_gold_tier_upgrade",
      },
    },
    event,
  );
};
