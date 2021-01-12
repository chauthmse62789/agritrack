import React, { Component } from 'react';
import CallAPI from './../../../services/CallAPI';
import { Link } from 'react-router-dom';
import { Spinner } from "reactstrap";
class MyProducts extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        dataMyProduct: [],
        loading: true,


    })


}

  getMyProduct() {
    this.setState({ loading: true })
    CallAPI(`api/Product/BySource?sourceId=`+localStorage.getItem('isId'), 'GET', null, null).then(res => {


        this.setState({ dataMyProduct: res.data, loading: false })

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
            this.setState({ dataMyProduct: [],loading: false })
        }
        console.log(JSON.stringify(err));
    });






}


componentDidMount() {

  this.getMyProduct();


}
    render() {

      var { dataMyProduct } = this.state;

        return (
            <div className="tab_content current active">
            <div className="tabs_item">
              <div className="account-tab-item">
                <div className="checkout-order">
                  <h2>My Products</h2>
                  <h3 className="title-item">Name <span>Action</span></h3>


                  {this.state.loading ? <div className="section-title text-center">
                            <Spinner className='text-center' color="primary" />

                        </div>:
                  <ul className="checkout-product">


                  {dataMyProduct.map(item => {
                                             return (
                                             <li>
                                              <img src={'https://api.agritrack.asia/api/Image/View?img=' + item.img} alt="Images" />
                                              <h3>{item.name}</h3>
                                              
                                              <div className="price-tag"><Link to={"/product/"+item.id}>View</Link></div>
                                            </li>
                                             
                                             
                                             
                                           )
                                         })}
                    
                    
                  </ul>}
               
             
                </div>
              </div>
            </div></div>
        );
    }
}

export default MyProducts;