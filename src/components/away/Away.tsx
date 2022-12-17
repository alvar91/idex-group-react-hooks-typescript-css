import { memo } from "react";

import { UserI } from "../../interfaces/UserI";

const Away = ({ user }: { user: UserI }) => {
  const { spentDays, all } = user.vacation;
  return (
    <div className="user__away">
      {spentDays}/{all}
    </div>
  );
};

export default memo(Away);
