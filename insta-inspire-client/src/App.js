import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import NewQuote from './Components/NewQuote.js'
import EditQuote from './Components/EditQuote.js'
import ShowQuote from './Components/ShowQuote.js'
import Home from './Components/Home.js';
import SearchQuotes from './Components/SearchQuotes.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <h1>INSTA-INSPIRE</h1>
      <div className='nav-routes'/>
     
     <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href='/'> Home</Nav.Link>
      <Nav.Link href='/NewQuote'> Add New Quote</Nav.Link>
      <Nav.Link href='/EditQuote'> Edit Quote </Nav.Link>
      <Nav.Link href='/SearchQuotes'>Search Quotes</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>

      <h2>Lets get inspired</h2>
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/NewQuote' component={NewQuote} />
        <Route path='/EditQuote/:id' component={EditQuote} />
        <Route path='/ShowQuote/:id' component={ShowQuote} />
        <Route path='/SearchQuotes' component={SearchQuotes} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
