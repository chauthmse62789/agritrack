import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Source extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="latest-product-card">
                    <div className="latest-product-img">
                    <Link to={"/source/"+this.props.idSource}>
                            <img style={{height:'250px',width: '100%'}} src={'https://api.agritrack.asia/api/Image/View?img='+this.props.imgSource} alt="Product Images" />
                        </Link>
                        <ul className="latest-product-action">
                            <li><Link to={"/source/"+this.props.idSource}><i className="bx bx-book" /></Link></li>
                           
                        </ul>
                    </div>
                    <div className="content">
                        <h3><Link to={"/source/"+this.props.idSource}>{this.props.nameSource}</Link></h3>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Source;