

import MainHeader from './components/MainHeader'

import {
  Switch,
  Route,
} from "react-router-dom";

import Products from './pages/Products'
import Users from './pages/Users'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div>
      <MainHeader />

      <main>

      <Switch>
                <Route path="/Products">
                    <Products />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/product-detail/:productId">
                    <ProductDetail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
      </main>



    </div>


  );
}





export default App;
