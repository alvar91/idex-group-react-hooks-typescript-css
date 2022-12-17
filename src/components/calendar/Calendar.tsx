import { memo, useContext, useMemo } from "react";

import classNames from "classnames";

import { groupByMonth } from "./utils";

import { UserI } from "../../interfaces/UserI";
import { DayI } from "../../interfaces/DayI";

import {
  getOffsetClassName,
  getRestDayClassName,
  getAwayFromWorkClassName,
  getAwayFromWorkType,
  getAwayFromWorkId,
  getAwayFromWorkInterval,
} from "./utils";

import "./calendar.css";
import { UserCardContext } from "../../contexts/user-card-context";
import { UserCardI } from "../../interfaces/UserCardI";

const Calendar = ({
  calendar,
  currentYear,
  user,
}: {
  calendar: DayI[][];
  currentYear: number;
  user: UserI;
}) => {
  const {
    userCard,
    setUserCard,
  }: {
    userCard: UserCardI | null;
    setUserCard: (userCard: UserCardI | null) => void;
  } = useContext(UserCardContext);

  const yearDays = useMemo(
    () =>
      getAwayFromWorkId(getAwayFromWorkType(structuredClone(calendar), user)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentYear]
  );

  const awayFromWorkIntervals = useMemo(
    () => getAwayFromWorkInterval(yearDays, user),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentYear]
  );

  const keyGetter = ({ date }: DayI): string => `${date.getMonth()}`;
  calendar = groupByMonth(yearDays, keyGetter);

  const onHover = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.target as HTMLUListElement;

    if (
      target?.dataset?.id &&
      //@ts-ignore
      userCard?.awayIntervalId !== target.dataset.id
    ) {
      setUserCard(awayFromWorkIntervals.get(target.dataset.id));
      //@ts-ignore
    } else if (userCard?.awayIntervalId !== target.dataset.id) {
      setUserCard(null);
    }
  };

  const onLeave = () => {
    setUserCard(null);
  };

  return (
    <ul
      className="user__months"
      onMouseMove={(e) => onHover(e)}
      onMouseLeave={() => onLeave()}
    >
      {calendar.map((month, i) => {
        const offset = new Date(currentYear, i, 1).getDay();

        return (
          <li key={i}>
            <ul className="day">
              {month.map((day, i) => {
                const offsetClassName =
                  i === 0 ? getOffsetClassName(offset) : "";
                const lastDayClassName = getRestDayClassName(day, currentYear);
                const awayFromWorkClassName = getAwayFromWorkClassName(day);
                return (
                  <li
                    key={i}
                    className={classNames(
                      `day__item`,
                      offsetClassName,
                      lastDayClassName,
                      awayFromWorkClassName
                    )}
                    data-id={day.awayIntervalId}
                  ></li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Calendar);
