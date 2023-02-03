import chunkloaders from "./tech/chunkloaders";
import create from "./tech/create";
import immersiveEngineering from "./tech/immersive_engineering";
import probe from "./tech/probe";
import tinkers from "./tech/tinkers";
import vanilla from "./tech/vanilla";

export default (event: Internal.RecipeEventJS) => {
  chunkloaders(event);
  create(event);
  immersiveEngineering(event);
  probe(event);
  tinkers(event);
  vanilla(event);
};
