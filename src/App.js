import {Route,Switch} from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllPeoplePage from './components/pages/AllPeoplePage';
import HomePage from './components/pages/HomePage';
import AllPlanetsPage from './components/pages/AllPlanetsPage';
import AllSpaceshipsPage from './components/pages/AllSpaceshipsPage';
import AllSpeciesPage from './components/pages/AllSpeciesPage';
function App() {
  return (
    <div>
      <Layout> 
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/people' exact>
            <AllPeoplePage/>
          </Route>
          <Route path='/planets' exact>
            <AllPlanetsPage/>
          </Route>
          <Route path='/spaceships' exact>
            <AllSpaceshipsPage/>
          </Route>
          <Route path='/species' exact>
            <AllSpeciesPage/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
