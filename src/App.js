import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory'
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/placeOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">

          </Route>

          <Route exact path="/shop">
            <Shop></Shop>

          </Route>
          <Route exact path="/review">
            <OrderReview></OrderReview>

          </Route>

          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>

          </Route>



        </Switch>

      </Router>
    </div>
  );
}

export default App;
