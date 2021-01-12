import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CallAPI from './../../services/CallAPI';
import { history } from './../../helpers/history';
import { withRouter } from "react-router-dom";
class Menu extends Component {
 constructor(props) {
    super(props);



    this.state = {
      searchText: null,
      data:[],
      chooseStateProductorSource:null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




    logoutAccount(){
    localStorage.removeItem('isAuth');
    localStorage.removeItem('isId');
    window.location.reload();
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();

    CallAPI(`api/Product/ById?productId=`+this.state.searchText, 'GET', null, null).then(res => {
      this.setState({ data: res.data, chooseStateProductorSource: 'product' })
      history.push('/'+this.state.chooseStateProductorSource+'/'+this.state.searchText);
      window.location.reload();
  }).catch(err => {
      console.log('inside catch block.');
      if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
      } else if (err.request) {
          console.log(err.request);
      } else {
          console.log('Error', err.message);
          this.setState({ data: [] })
      }
      console.log(JSON.stringify(err));
  });



  CallAPI(`api/Product/BySource?sourceId=`+this.state.searchText, 'GET', null, null).then(res => {
    this.setState({ data: res.data, chooseStateProductorSource: 'product' })
    history.push('/'+this.state.chooseStateProductorSource+'/'+this.state.searchText);
    window.location.reload();
}).catch(err => {
    console.log('inside catch block.');
    if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    } else if (err.request) {
        console.log(err.request);
    } else {
        console.log('Error', err.message);
        this.setState({ data: [] })
    }
    console.log(JSON.stringify(err));
});
 

CallAPI(`api/Source/ById?sourceId=`+this.state.searchText, 'GET', null, null).then(res => {
  this.setState({ data: res.data, chooseStateProductorSource: 'source' })
  history.push('/'+this.state.chooseStateProductorSource+'/'+this.state.searchText);
  window.location.reload();
}).catch(err => {
  console.log('inside catch block.');
  if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
  } else if (err.request) {
      console.log(err.request);
  } else {
      console.log('Error', err.message);
      this.setState({ data: [] })
  }
  console.log(JSON.stringify(err));
});


  
   
  }


  
  render() {

    return (
      <div>
        <div className="navbar-area">
          {/* <div className="mobile-nav">
            <Link to="/" className="logo">
              <img src="assets/images/logos/logo-agritrack.png" alt="Logo" />
            </Link>
          </div> */}
          <div className="main-nav nav-two">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light ">
                <Link className="navbar-brand" to="/">
                  <img src="https://thegioithemes.com/try/logo-agritrack.png" alt="Logo" />
                </Link>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{ display: 'block' }}>
                  <ul className="navbar-nav m-auto">

                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Discover
              </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sources" className="nav-link">
                        Sources
              </Link>
                    </li>
                  </ul>


                  {localStorage.getItem('isAuth') ?
                    <div className="nav-bar-side">


                      <div className="language-list">


                        <div className="nav-bar-btn">
                          <Link to="/my-account" className="account-btn">Dashboard</Link>


                        </div>
                      </div>
                      <div className="language-list">
                      <div className="nav-bar-btn">
                        <Link to="/create-product" className="account-btn" >Create Product</Link>
                      </div>
                      </div>
                      <div className="nav-bar-btn">
                        <Link to="#" className="account-btn" onClick={()=>this.logoutAccount()}>Logout</Link>
                      </div>

                    </div> : <div className="nav-bar-side">


                      <div className="language-list">


                        <div className="nav-bar-btn">
                          <Link to="/login" className="account-btn">Login</Link>
                        </div>

                      </div>
                      <div className="nav-bar-btn">
                        <Link to="/register" className="account-btn">Become as Source</Link>
                      </div>

                    </div>}


                </div>
              </nav>
            </div>
          </div>

        </div>

        <div className="nav-bottom-area">
        <div className="section-title text-center">
                            <h2>
Blockchain
Agriculture</h2>
<br></br>
<br></br>



                        </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="navbar-category">
                  <div className="dropdown category-list-dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bx bx-list-ul" />
              Categories
              <i className="bx bx-chevron-down" />
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButtoncategory" style={{}}>
                      <Link to="/" className="nav-link-item">
                        Products
              </Link>
                      <Link to="/sources">
                        Sources
              </Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
              
                <div className="nav-bottom-form-area">
                  <form className="nav-bottom-form" data-toggle="validator"  noValidate="true" onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" placeholder="Search Your Item" name="searchText" value={this.state.searchText} onChange={this.handleChange} />
                    <button className="subscribe-btn" type="submit" style={{ pointerEvents: 'all', cursor: 'pointer' }}>
                      Search
            </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>


    );
  }
}





export default withRouter(Menu);