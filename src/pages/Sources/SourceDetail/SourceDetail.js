import React, { Component } from 'react';
import CallAPI from './../../../services/CallAPI';
import Product from './../../Products/Product/Product';
import { Spinner } from "reactstrap";

class SourceDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            dataProductSource:[],
            loadingProduct: true,
            loadingSrc:true

        }

    }






    getSourceDetail() {
        CallAPI(`api/Source/ById?sourceId=` + this.props.match.params.idSrc, 'GET', null, null).then(res => {
            console.log(this.props.match.params.idSrc)
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
                this.setState({ loading: false, dataSource: [] })
            }
            console.log(JSON.stringify(err));
        });

    }




    getProductBySource() {
        CallAPI(`api/Product/BySource?sourceId=` + this.props.match.params.idSrc, 'GET', null, null).then(res => {
            console.log(this.props.match.params.idSrc)
            this.setState({
                dataProductSource: res.data,
                loadingProduct: false,

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
                this.setState({ loadingProduct: false, dataProductSource: [] })
            }
            console.log(JSON.stringify(err));
        });

    }




    componentDidMount() {
        this.getSourceDetail();

        this.getProductBySource();
    }




    render() {

        var { dataSource,dataProductSource } = this.state;
        return (
            <div>
                <div className="product-details-area pt-100 pb-70">
                    <div className="container">
                    <div className="section-title text-center">
                            <h2>Source</h2>
                        </div>
                            <br></br>
                        {this.state.loadingSrc ? <div className="section-title text-center">
                            <Spinner className='text-center' color="primary" />

                        </div>:


                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="product-detls-image">
                                    <img style={{ height: '250px', width: '100%' }} src={'https://api.agritrack.asia/api/Image/View?img=' + dataSource.image} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="product-desc">
                                    <h3>{dataSource.name}</h3>
                                    <div className="price">
                                        Ethereum Hash:
                                        <a target="_blank" href={'https://ropsten.etherscan.io/tx/'+dataSource.trxHash}>{dataSource.trxHash}</a> 
                                  </div>
                                    <div className="price">
                                        Address: <span className="new-price">{dataSource.address}</span>

                                    </div>
                                    <div className="price">

                                        Join Date: <span className="new-price">{dataSource.createdDate}</span>
                                    </div>

                                    <p style={{ textAlign: 'justify' }}>
                                        <strong>Description: </strong>
                                        {dataSource.description}
                                    </p>

                                    




                                </div>
                            </div>
                        </div>}
                    </div>
                </div>



                <div className="latest-product-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Products At Source</h2>
                        </div>

                        <br></br>
                    {this.state.loadingProduct ? <div className="section-title text-center">
                            <Spinner className='text-center' color="primary" />

                        </div> : 
                        
                            <div className="row pt-45">{dataProductSource.map(item => {
                                             return (<Product nameProduct={item.name} imgProduct={item.img} idProduct={item.id} />)
                                            })}</div>}

                        </div>
                    </div>
                </div>

            
        );
    }
}

export default SourceDetail;