import { useState, memo, useMemo, useContext, useRef } from "react";
import User from "../user";

import UserCard from "../user-card";

import { UserCardContext } from "../../contexts/user-card-context";

import { months } from "../../constants";

import { mockResponse } from "../../mock/responseMock";

import "./vacation-shedule.css";
import { UserCardI } from "../../interfaces/UserCardI";

const VacationSchedule = () => {
  const [year, setYear] = useState<number>(() => new Date().getFullYear());

  const calendar = useMemo(
    () =>
      months.map((_, i) => {
        const daysInMonth = new Date(year, i + 1, 0).getDate() as number;
        return Array.from({ length: daysInMonth }).map((_, j) => {
          return {
            type: null,
            value: j + 1,
            date: new Date(year, i, j + 1),
          };
        });
      }),
    [year]
  );

  const container = useRef<HTMLDivElement | null>(null);
  const { userCard } = useContext(UserCardContext) as {
    userCard: UserCardI | null;
  };

  const onMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (container === null) return;

    const mouseX = e.pageX;
    const mouseY = e.pageY;

    container.current!.style.top = mouseY + 10 + "px";

    container.current!.style.left = mouseX + "px";
  };

  return (
    <>
      <main className="main" onMouseMove={(e) => onMove(e)}>
        <section className="schedule">
          <div className="schedule__header">
            <h2 className="schedule__title">График отпусков</h2>
            <div className="schedule__pagination">
              <button
                className="pagination__button"
                type="button"
                onClick={() => setYear(year - 1)}
                aria-label="Предыдущий год"
              ></button>
              <span className="pagination__year">{year}</span>
              <button
                className="pagination__button pagination__button--next"
                type="button"
                onClick={() => setYear(year + 1)}
                aria-label="Следующий год"
              ></button>
            </div>
          </div>
          <div className="schedule__main">
            <ul className="schedule__months">
              <li>Фамилия, Имя</li>
              <li>дней</li>
              <ul className="schedule__months-list">
                {months.map((month, i) => {
                  return <li key={i}>{month}</li>;
                })}
              </ul>
            </ul>
            {mockResponse.users.map((user, i) => {
              return (
                <User
                  key={i}
                  user={user}
                  calendar={calendar}
                  currentYear={year}
                />
              );
            })}
          </div>
        </section>
      </main>
      <div className="container" ref={container}>
        {userCard && <UserCard />}
      </div>
    </>
  );
};

export default memo(VacationSchedule);
