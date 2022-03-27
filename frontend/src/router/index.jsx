import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "views/Home";
import HabitsAndHealth from "views/HabitsAndHealth";
import EmergencyQuestionnaire from "views/EmergencyQuestionnaire";
import Result from "views/Result";
import Login from "views/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route
          exact
          path="/emergency-questionnaire"
          component={EmergencyQuestionnaire}
        />
        <Route exact path="/habits-and-health" component={HabitsAndHealth} />
        <Route exact path="/questionnaire-result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
