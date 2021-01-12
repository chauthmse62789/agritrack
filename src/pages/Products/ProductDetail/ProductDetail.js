import React, { Component } from 'react';
import CallAPI from './../../../services/CallAPI';
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner } from "reactstrap";
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduct: [],
            loading: true,
            dataSource:[],
            loadingSrc:true


        }

    }




    getProductById() {
        CallAPI(`api/Product/ById?productId=` + this.props.match.params.idPrt, 'GET', null, null).then(res => {
            

            this.setState({
                dataProduct: res.data,
                loading: false,

            })
         
                CallAPI(`api/Source/ById?sourceId=` + res.data.sourceId, 'GET', null, null).then(res => {
                    
                    this.setState({
                        dataSource: res.data,
                        loadingSrc: false,
        
                    })
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
                        this.setState({ loadingSrc: false, dataSource: [] })
                    }
                    console.log(JSON.stringify(err));
                });
        
            
           
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
                this.setState({ loading: false, dataProduct: [] })
            }
            console.log(JSON.stringify(err));
        });

    }



    


    componentDidMount() {
        this.getProductById();
        

    }
    render() {
        var { dataProduct,dataSource } = this.state;
        return (
            <div className="product-details-area pt-100 pb-70">
                <div className="container">
                <div className="section-title text-center">
                            <h2>Product</h2>
                        </div>
                        <br></br>


                        {this.state.loading ? <div className="section-title text-center">
                            <Spinner className='text-center' color="primary" />

                        </div>:
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="product-detls-image">
                                <img style={{ height: '250px', width: '100%' }} src={'https://api.agritrack.asia/api/Image/View?img=' + dataProduct.img} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="product-desc">
                                <h3>{dataProduct.name}</h3>
                                <div className="price">
                                        Ethereum Hash:
                                        <a rel="noreferrer" target="_blank" href={'https://ropsten.etherscan.io/tx/'+dataProduct.trxHash}>{dataProduct.trxHash}</a> 
                                  </div>
                                  <div className="price">

                                    ID: 
                                   <p> {dataProduct.id}</p>
                                </div>
                                <div className="price">

                                    Created Date: <span className="new-price">{dataProduct.createdDate}</span>
                                </div>
                                {this.state.loadingSrc?
                            <Spinner className='text-center' color="primary" />

                      :<div className="price">

<img style={{height:'69px',width:'118px'}} src={'https://api.agritrack.asia/api/Image/View?img='+dataSource.image} alt="Logo Source"/> <span className="new-price">{dataSource.name}</span>
</div>}
                                

                                <div className="product-review">
                                    <div className="rating">

                                    </div>

                                </div>




                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Weight</th>
                                            <th scope="col">Certification</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >{dataProduct.unit}</td>
                                            <td>{dataProduct.weight}</td>
                                            <td>{dataProduct.certification}</td>

                                        </tr>

                                    </tbody>
                                </table>
                                <p>
                                    <strong>Description: </strong>{dataProduct.desciption}
                                </p>
                               
                                


                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

export default ProductDetail;