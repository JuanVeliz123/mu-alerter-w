import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './constants/routes.json';
import HomePage from './containers/HomePage';
import AppLayout from './containers/AppLayout';
import Utils from './screens/utils/Utils';
import Players from './screens/players/Players';

export default function Routes() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path={routes.DEFAULT} component={HomePage} />
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.SETTINGS} component={HomePage} />
        <Route path={routes.PLAYER_INFO} component={Players} />
        <Route path={routes.UTILS} component={Utils} />
        <Route render={() => <Redirect to={routes.DEFAULT} />} />
      </Switch>
    </AppLayout>
  );
}
