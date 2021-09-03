import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  NavLink 
} from "react-router-dom";


function App() {
  return (
    <div>


      <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      <h2>Let's get started!</h2>
      <Switch>
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

   
    </div>


  );
}

function Home() {
  return <h2>Home</h2>;
}

function Products() {
  return <h2>Products</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
