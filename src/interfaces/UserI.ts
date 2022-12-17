export interface UserI {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  vacation: { spentDays: string; all: string };
  awayFromWorkTime: {
    type: string;
    startAwayTime: Date;
    endAwayTime: Date;
  }[];
}
