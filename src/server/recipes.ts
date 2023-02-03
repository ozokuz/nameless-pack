import exploration from "./recipes/exploration";
import food from "./recipes/food";
import magic from "./recipes/magic";
import other from "./recipes/other";
import storage from "./recipes/storage";
import tech from "./recipes/tech";

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent("recipes", (event) => {
  exploration(event);
  food(event);
  magic(event);
  other(event);
  storage(event);
  tech(event);
});
