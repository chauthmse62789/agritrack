import React, { Component } from 'react';
import Product from './Product/Product';
import CallAPI from './../../services/CallAPI';
import { Spinner } from "reactstrap";
class Products extends Component {



    constructor(props) {
        super(props);
        this.state = ({
            dataAllProducts: [],
            loading: true,


        })


    }


    getAllProducts() {
        this.setState({ loading: true })
        CallAPI('api/Product/All', 'GET', null, null).then(res => {
            this.setState({ dataAllProducts: res.data, loading: false })

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
                this.setState({ dataAllProducts: [] })
            }
            console.log(JSON.stringify(err));
        });






    }

    componentDidMount() {

        this.getAllProducts();


    }
    render() {
        return (
            <div className="latest-product-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>All Products</h2>

                    </div>


                        <br></br>
                    
                        {this.state.loading ? <div className="section-title text-center">
                            <Spinner className='text-center' color="primary" />

                        </div> : 
                        
                            <div className="row pt-45">{this.state.dataAllProducts.map(item => {
                            return (<Product nameProduct={item.name} imgProduct={item.img} idProduct={item.id} />) 
                        })}</div>}

                    </div>
               
            </div>
        );
    }
}

export default Products;