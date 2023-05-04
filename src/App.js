import './App.css';

import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import Ajouter from './Ajouter';
import BlogDetail from './BlogDetail';
import NotFound from './notFound';

function App() {
  
  return (
    <Router>
          <NavBar />
               <Switch>
                    <Route exact path={'/'}>
                        <Home />
                    </Route>
                    <Route exact path={'/ajouter'}>
                        <Ajouter />
                    </Route>
                    <Route path={'/blogs/:id'}>
                        <BlogDetail />
                    </Route>
                    <Route path={'*'}>
                        <NotFound />
                    </Route>
              </Switch>
    </Router>
    
     
      
  );
}

export default App;
