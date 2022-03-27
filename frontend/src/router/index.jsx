import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "views/Home";
import HabitsAndHealth from "views/HabitsAndHealth";
import EmergencyQuestionnaire from "views/EmergencyQuestionnaire";
import Login from "views/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/emergency-questionnaire"
          component={EmergencyQuestionnaire}
        />
        <Route exact path="/habits-and-health" component={HabitsAndHealth} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
