import {Game} from "./Game";

export  interface Games {
  items: Game[];
  itemsPerPage: number;
  page: number;
}
