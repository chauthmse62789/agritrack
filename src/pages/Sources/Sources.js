import React, { Component } from 'react';
import Source from './Source/Source';
import CallAPI from './../../services/CallAPI';
import { Spinner } from "reactstrap";
class Sources extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            dataAllSources: [],
            loading: true,


        })


    }


    getAllSources() {
        this.setState({ loading: true })
        CallAPI('api/Source/All', 'GET', null, null).then(res => {


            this.setState({ dataAllSources: res.data, loading: false })

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
                this.setState({ dataAllSources: [] })
            }
            console.log(JSON.stringify(err));
        });






    }

    componentDidMount() {

        this.getAllSources();


    }



    render() {
        return (
            <div className="latest-product-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>All Sources</h2>
                    </div>
                    <br></br>
                    {this.state.loading ? <div className="section-title text-center">
                            <Spinner className='text-center' color="primary" />

                        </div> : 
                        
                            <div className="row pt-45">{this.state.dataAllSources.map(item => {
                                             return (<Source dateCreatedSource={item.createdDate} idSource={item.id}  nameSource={item.name} imgSource={item.image}/>)
                                            })}</div>}
                


                    </div>
                </div>
           
        );
    }
}

export default Sources;