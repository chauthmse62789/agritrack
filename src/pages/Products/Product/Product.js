import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="latest-product-card">
                    <div className="latest-product-img">
                    <Link to={"/product/"+this.props.idProduct}>
                            <img style={{height:'250px',width: '100%'}} src={'https://api.agritrack.asia/api/Image/View?img='+this.props.imgProduct} alt="Product Images" />
                        </Link>
                        <ul className="latest-product-action">
                            <li><Link to={"/product/"+this.props.idSource}><i className="bx bx-book" /></Link></li>
                           
                        </ul>
                    </div>
                    <div className="content">
                        <h3><Link to={"/product/"+this.props.idProduct}>{this.props.nameProduct}</Link></h3>
                      
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;