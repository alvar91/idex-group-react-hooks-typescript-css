import { UserI } from "./UserI";

export interface UserCardI {
  awayIntervalId: string;
  user: UserI;
  startDate: Date;
  endDate: Date;
  type: string;
}
