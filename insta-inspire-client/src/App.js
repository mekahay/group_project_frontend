import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import NewQuote from './Components/NewQuote.js'
import EditQuote from './Components/EditQuote.js'
import ShowQuote from './Components/ShowQuote.js'
import Home from './Components/Home.js';


function App() {
  return (
    <div className="App">
      <h1>INSTA-INSPIRE</h1>
     <Router>
      {/* Navigation bar in here somewhere? */}
      <div className='nav-routes'/>
      <Link to='/'> HOME PAGE</Link> <br/>
      <Link to='/NewQuote'> ADD A NEW QUOTE </Link> <br/>
      <Link to='/EditQuote'> UPDATE QUOTE </Link>
      <h2>How Do You Feel Today?</h2>
      
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/NewQuote' component={NewQuote} />
        <Route path='/EditQuote/:id' component={EditQuote} />
        <Route path='/ShowQuote/:id' component={ShowQuote} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
