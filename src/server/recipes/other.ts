import book from "./other/book";
import bucket from "./other/bucket";
import conversions from "./other/conversions";
import lightsources from "./other/lightsources";
import oreprocessing from "./other/oreprocessing";
import other from "./other/other";
import plates from "./other/plates";
import tools from "./other/tools";
import woodstuff from "./other/woodstuff";
import workstations from "./other/workstations";

export default (event: Internal.RecipeEventJS) => {
  book(event);
  bucket(event);
  conversions(event);
  lightsources(event);
  oreprocessing(event);
  other(event);
  plates(event);
  tools(event);
  woodstuff(event);
  workstations(event);
};
