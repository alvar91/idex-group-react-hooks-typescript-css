import {
  createContext,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";

import { UserCardI } from "../interfaces/UserCardI";

export const UserCardContext = createContext({
  userCard: null,
  setUserCard: (userCard: UserCardI | null) => {
    console.log(userCard);
  },
});

export const UserCardProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  let [userCard, setUserCard] = useState<UserCardI | null>(null);

  return (
    //@ts-ignore
    <UserCardContext.Provider value={{ userCard, setUserCard }}>
      {props.children}
    </UserCardContext.Provider>
  );
};
