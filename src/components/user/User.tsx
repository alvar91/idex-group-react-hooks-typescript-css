import { memo } from "react";

import Info from "../info";
import Away from "../away";

import Calendar from "../calendar";

import { UserI } from "../../interfaces/UserI";
import { DayI } from "../../interfaces/DayI";

import "./user.css";

const User = ({
  calendar,
  currentYear,
  user,
}: {
  calendar: DayI[][];
  currentYear: number;
  user: UserI;
}) => {
  return (
    <div className="user">
      <Info user={user} />
      <Away user={user} />
      <Calendar user={user} calendar={calendar} currentYear={currentYear} />
    </div>
  );
};

export default memo(User);
