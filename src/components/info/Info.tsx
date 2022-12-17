import { memo } from "react";

import { UserI } from "../../interfaces/UserI";

const Info = ({ user }: { user: UserI }) => {
  const { name, surname, avatar } = user;
  return (
    <div className="user__info">
      <img className="user__avatar" src={avatar} alt="Аватар" />
      <div className="user__name">
        <span className="user__text">{name}</span>
        <span className="user__text">{surname}</span>
      </div>
    </div>
  );
};

export default memo(Info);
