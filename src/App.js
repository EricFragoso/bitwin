import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Start from './pages/start';
import Casual from './pages/casual'
import GameCasual from './pages/game-casual'
import GameLobby from './pages/game-lobby'
import Lobby from './pages/lobby'
import LobbyC from './pages/lb-creator'
import LobbyJ from './pages/lb-join'

const App = () =>{
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/casual">
            <Casual />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
          <Route exact path="/lobbyC">
            <LobbyC />
          </Route>
          <Route exact path="/lobbyJ">
            <LobbyJ />
          </Route>
          <Route exact path="/gameC">
            <GameCasual />
          </Route>
          <Route exact path="/gameL">
            <GameLobby />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default withRouter(App);