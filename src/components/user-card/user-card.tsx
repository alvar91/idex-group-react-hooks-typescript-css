import { memo, useContext } from "react";

import classNames from "classnames";

import { UserCardContext } from "../../contexts/user-card-context";

import { formatDate } from "../../utils/dateFormat";
import {datesSubtract} from "../../utils/datesSubtract";

import { awayType } from "../../constants";

import "./user-card.css";
import { UserCardI } from "../../interfaces/UserCardI";

const UserCard = () => {
  const { userCard } = useContext(UserCardContext);

  if(userCard === null) return (<></>);

  const { user: { name, surname, avatar }, type, startDate, endDate} = userCard as UserCardI;

  return (
    <aside className="card">
      <div className="card__person">
        <div className="card__photo">
          <img className="card__image" src={avatar} width="54" alt="Аватар пользователя" />
        </div>
        <div className="card__name">
          {name} {surname}
        </div>
      </div>
      <div className="card__info">
        <div className={classNames("card__dates", type && `card__dates--${type}`)}>
          {formatDate(startDate)} —&nbsp;{formatDate(endDate)} ({datesSubtract(endDate, startDate)}д.)
        </div>
        <span className="card__comment">{awayType(type)}</span>
      </div>
    </aside>
  );
};

export default memo(UserCard);
