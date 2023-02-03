import recipes from "../../helpers/recipes";

export default (event: Internal.RecipeEventJS) => {
  // Temporarily disable Higher tier Backpacks
  ["iron", "gold", "diamond", "netherite"].forEach((material) => {
    // @ts-expect-error dynamic
    event.remove({ output: `sophisticatedbackpacks:${material}_backpack` });
  });

  // Leather Backpack
  event.remove({ output: "sophisticatedbackpacks:backpack" });
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
};
