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

interface InscriberInput {
  middle: Internal.IngredientJS_;
  top?: Internal.IngredientJS_;
  bottom?: Internal.IngredientJS_;
}

function inscriber(
  output: Internal.ItemStackJS_,
  input: InscriberInput,
  mode: "press" | "inscribe",
  event: Internal.RecipeEventJS,
) {
  const ingredients: any = {
    middle: {
      item: input.middle,
    },
  };

  if ("top" in input) {
    ingredients.top = {
      item: input.top,
    };
  }

  if ("bottom" in input) {
    ingredients.bottom = {
      item: input.bottom,
    };
  }

  event.custom({
    type: "ae2:inscriber",
    // @ts-expect-error custom
    mode,
    result: {
      item: output,
    },
    ingredients,
  });
}

interface CastingRecipe {
  cast(cast: Internal.IngredientJS_): CastingRecipe;
  consumeCast(): CastingRecipe;
  coolingTime(time: number): CastingRecipe;
}

function casting_basin(
  output: Internal.ItemStackJS_,
  fluid: Internal.FluidStackJS_ | FluidTagJS_,
  amount: number,
  event: Internal.RecipeEventJS,
): CastingRecipe {
  // @ts-expect-error tconstruct
  return event.recipes.tconstruct.casting_basin(
    output,
    fluid,
    amount,
  ) as CastingRecipe;
}

interface CastingTableRecipe extends CastingRecipe {
  multiUseCast(type: string): CastingTableRecipe;
  singleUseCast(type: string): CastingTableRecipe;
}

type FluidTagJS_ = `#${Special.FluidTag}`;

function casting_table(
  output: Internal.ItemStackJS_,
  fluid: Internal.FluidStackJS_ | FluidTagJS_,
  amount: number,
  event: Internal.RecipeEventJS,
): CastingTableRecipe {
  // @ts-expect-error tconstruct
  return event.recipes.tconstruct.casting_table(
    output,
    fluid,
    amount,
  ) as CastingTableRecipe;
}

interface AlloyInput {
  tag: Special.FluidTag;
  amount: number;
}

function alloy(
  result: Internal.FluidStackJS_,
  amount: number,
  inputs: AlloyInput[],
  temperature: number,
  event: Internal.RecipeEventJS,
) {
  event.custom({
    // @ts-expect-error tconstruct
    type: "tconstruct:alloy",
    inputs,
    result: {
      fluid: result,
      amount,
    },
    temperature,
  });
}

function pressure_chamber(
  results: Internal.ItemStackJS_[],
  inputs: Special.ItemTag[],
  pressure: number,
  event: Internal.RecipeEventJS,
) {
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    // @ts-expect-error custom
    results: results.map((r) => ({ item: r })),
    pressure,
    inputs: inputs.map((i) => ({ tag: i })),
  });
}

export default {
  // ceramics: { kiln },
  sewingkit: { sewing },
  ae2: { inscriber },
  tconstruct: { casting_basin, casting_table, alloy },
  pneumaticcraft: { pressure_chamber },
} as const;
