import vanilla from "./storage/vanilla";
import backpacks from "./storage/backpacks";
import functional from "./storage/functional";
import sophisticated from "./storage/sophisticated";
import prettypipes from "./storage/prettypipes";
import ae2 from "./storage/ae2";
import other from "./storage/other";

export default (event: Internal.RecipeEventJS) => {
  vanilla(event);
  backpacks(event);
  functional(event);
  sophisticated(event);
  prettypipes(event);
  ae2(event);
  other(event);
};
