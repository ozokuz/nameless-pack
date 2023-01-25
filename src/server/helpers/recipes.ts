function kiln(
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
}

export default {
  ceramics: { kiln },
} as const;
