import './App.css';

import { Routes, Route } from 'react-router-dom'
import routes from './routes';

import Welcome from "../Screen/Welcome/Welcome"
import Game from "../Screen/Game/Game"
import Tutorial from "../Screen/Tutorial/Tutorial"
import Ranking from "../Screen/Ranking/Ranking"
import NotFound from "../Screen/NotFound/NotFound"


function Routing() {
  return (
    <Routes>
      <Route path={routes.WELCOME} index element={<Welcome/>}/>
      <Route path={routes.GAME} index element={<Game/>}/>
      <Route path={routes.TUTORIAL} index element={<Tutorial/>}/>
      <Route path={routes.RANKING} index element={<Ranking/>}/>
      <Route path="/*" index element={<NotFound/>}/>
    </Routes>
  );
}

export default Routing;
