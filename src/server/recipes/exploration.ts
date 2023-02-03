import boats from "./exploration/boats";
import maps from "./exploration/maps";
import waystones from "./exploration/waystones";

export default (event: Internal.RecipeEventJS) => {
  boats(event);
  maps(event);
  waystones(event);
};
