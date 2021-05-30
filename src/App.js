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
        <Route exact path={["/", "/login"]}>
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/calendar-month">
          <CalendarView />
        </Route>
        <Route exact path="/date/:date">
          <DayView />
        </Route>
        <Route exact path="/week/:date">
          <WeekView />
        </Route>
        <Route exact path="/focus">
          <Focus />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
