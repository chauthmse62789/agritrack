import React, { Component } from 'react';
import { Route,Link,NavLink } from 'react-router-dom';
import MyAccount from './MyAccount/MyAccount';
import MyProducts from './MyProducts/MyProducts';
class Dashboard extends Component {
  logout(){
    localStorage.removeItem('isId');
    localStorage.removeItem('isAuth');
    window.location.reload();
  }
    render() {





        return (
            <div className="my-account-area ptb-100">
  <div className="container">
    <div className="tab account-tab">
      <div className="row">
        <div className="col-lg-4">
          <ul className="tabs">
            <li>
              <NavLink to="/my-account">
                My Account
              </NavLink>
            </li>
            <li>
              <Link to="/my-products">
                My Products
              </Link>
            </li>
         
          </ul>
        </div>
        <div className="col-lg-8">
         
                  <Route exact path='/my-account' component={MyAccount} />
                 <Route path='/my-products' component={MyProducts} />

       
            
      
            
          
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Dashboard;