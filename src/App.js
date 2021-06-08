import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Homepage from "./pages/homepage/Homepage";
import CalendarView from "./pages/calendar/CalendarView";
import DayView from "./pages/day/DayView";
import WeekView from "./pages/week/WeekView";
import Focus from "./pages/focus/Focus";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route
          exact
          path={["/", "/login"]}
          name={"login"}
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path="/register"
          name={"register"}
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/home"
          name={"home"}
          render={(props) => <Homepage {...props} />}
        />
        <Route
          exact
          path="/calendar-month"
          name={"calendarMonth"}
          render={(props) => <CalendarView {...props} />}
        />
        <Route
          exact
          path="/date/:date"
          name={"date"}
          render={(props) => <DayView {...props} />}
        />
        <Route
          exact
          path="/week/:date"
          name={"week"}
          render={(props) => <WeekView {...props} />}
        />
        <Route
          exact
          path="/focus"
          name={"focus"}
          render={(props) => <Focus {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
