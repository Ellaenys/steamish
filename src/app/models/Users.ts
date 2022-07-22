import {User} from "./User";

export interface Users {
  items: User[];
  itemsPerPage: number;
  page: number;
  totalpage: number;

}
