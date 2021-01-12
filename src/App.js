import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import Menu from './components/Menu/Menu';
import { history } from './helpers';
import { PrivateRoute } from './components';
import { alertActions } from './actions';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import Dashboard from './pages/Dashboard/Dashboard';
import Sources from './pages/Sources/Sources';
import Products from './pages/Products/Products';
import SourceDetail from './pages/Sources/SourceDetail/SourceDetail';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';
import Register from './pages/Register/Register';
import CreateProduct from './pages/CreateProduct/CreateProduct';



class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {

      this.props.clearAlerts();
    });

  }

  render() {
    return (

      <Router>

        <Menu />
        <Switch>







          <Route exact path="/" component={Products} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/my-account" component={Dashboard} />
          <PrivateRoute exact path="/my-products" component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sources" component={Sources} />
          <Route exact path="/source/:idSrc" component={SourceDetail} />
          <Route exact path="/product/:idPrt" component={ProductDetail} />
          <PrivateRoute exact path="/create-product" component={CreateProduct} />
          <Route exact path="/register" component={Register} />
          <Route component={Error} />
          <Redirect from="*" to="/" />
        </Switch>

        <Footer />

      </Router>
    );
  }
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};


export default connect(mapState, actionCreators)(App);
