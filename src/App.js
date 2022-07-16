import MainHeader from "./components/MainHeader"

import { Switch, Route, Redirect } from "react-router-dom"

import Products from "./pages/Products"
import Users from "./pages/Users"
import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import ProductDetail from "./pages/ProductDetail"

function App() {
  return (
    <div>
      <MainHeader />

      <main>
        <Switch>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  )
}

export default App
