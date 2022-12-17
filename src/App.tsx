import { memo } from "react";
import Header from "./components/header";
import VacationSchedule from "./components/vacation-schedule";

import "./app.css";
import { UserCardProvider } from "./contexts/user-card-context";

function App() {
  return (
    <div className="app">
      <UserCardProvider>
        <Header />
        <VacationSchedule />
      </UserCardProvider>
    </div>
  );
}

export default memo(App);
