/* function kiln(
  output: Internal.ItemStackJS_,
  input: Internal.IngredientJS_,
  event: Internal.RecipeEventJS,
) {
  event.custom({
    type: "ceramics:kiln",
    // @ts-expect-error custom
    ingredient: {
      item: input,
    },
    result: output,
    experience: 0.3,
    cookingtime: 100,
  });
} */

type SewingInput = { count: number } & (
  | { item: Internal.IngredientJS_ }
  | { tag: Internal.IngredientJS_ }
);

function sewing(
  output: Internal.ItemStackJS_,
  input: SewingInput[],
  event: Internal.RecipeEventJS,
) {
  event.custom({
    type: "sewingkit:sewing",
    // @ts-expect-error custom
    materials: input.map((i) => {
      if ("item" in i) {
        return {
          count: i.count,
          ingredient: { item: i.item },
        };
      }

      return {
        count: i.count,
        ingredient: { tag: (i.tag as string).slice(1) },
      };
    }),
    result: {
      item: output,
    },
    tool: {
      type: "sewingkit:tool_ingredient",
      tool_type: "sewingkit_sew",
    },
  });
}

export default {
  // ceramics: { kiln },
  sewingkit: { sewing },
} as const;
