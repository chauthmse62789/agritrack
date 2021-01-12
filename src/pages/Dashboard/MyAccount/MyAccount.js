import React, { Component } from 'react';
import CallAPI from './../../../services/CallAPI';
import { Spinner } from "reactstrap";
class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        dataMySource: [],
        loading: true,


    })


}


getMySource() {
    this.setState({ loading: true })
    CallAPI(`api/Source/ById?sourceId=`+localStorage.getItem('isId'), 'GET', null, null).then(res => {


        this.setState({ dataMySource: res.data, loading: false })

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
            this.setState({ dataMySource: [],loading: false })
        }
        console.log(JSON.stringify(err));
    });






}




componentDidMount() {

    this.getMySource();


}




  render() {
    var { dataMySource } = this.state;
    return (<div className="tab_content current active">
      <div className="tabs_item">
        <div className="account-tab-item">

        {this.state.loading ? <div className="section-title text-center">
                            <Spinner className='text-center' color="primary" />

                        </div>:
          <div className="account-details">
            <h2>Profile Details</h2>
            <div className="account-profile">
              <div className="account-profile-img">
                <img style={{ height: '250px', width: '100%' }} src={'https://api.agritrack.asia/api/Image/View?img=' + dataMySource.image}  alt="Images" />
              </div>

            </div>
            <div className="account-form">
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                    <th scope="col">Ethereum Hash</th>
                    <td><a target="_blank" href={'https://ropsten.etherscan.io/tx/'+dataMySource.trxHash}>{dataMySource.trxHash}</a></td>
                   
                  </tr>
                  <tr>
                    <th scope="col">ID</th>
                    <td>{dataMySource.id}</td> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{dataMySource.name}</td>
                   
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>{dataMySource.address}</td>
                   
                  </tr>
                  <tr>
                    <th scope="row">Owner</th>
                    <td>{dataMySource.owner}</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Created Date</th>
                    <td>{dataMySource.createdDate}</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Description</th>
                    <td>{dataMySource.description}</td>
                    
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

          </div>}
        </div>
      </div>
    </div>
    );
  }
}

export default MyAccount;