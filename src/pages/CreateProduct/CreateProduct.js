import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { userAction } from '../../actions';
import { connect } from 'react-redux';
import { history } from '../../helpers';


class CreateProduct extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.props.clearAlerts();
    });



    this.state = {
      files: [],
      imageShow: null,
      product: {
        name: '',
        weight: '',
        unit: '',
        certificate: '',
        base64Image: '',
        description: ''


      },
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    const { product } = this.state;
    this.setState({
      product: {
        ...product,
        [name]: value
      }
    });
    console.log(product)

  }
  getFiles(files) {
    

    this.setState({
      files: files,
      imageShow: files[0].base64,
      product: { base64Image: files[0].base64.slice(22, files[0].base64.length) }
    });

  }



  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { product } = this.state;
        if (product.name && product.weight && product.description && product.unit && product.certificate && product.base64Image) {
      this.props.createproduct(product);
    }
  }
  render() {
    const { creating } = this.props;
    const { product, submitted } = this.state;
    const { alert } = this.props;
    return (
      <div className="user-area pt-100 pb-70">
        <div className="container">
          <div className="user-width">
            <div className="user-form">
              <div className="contact-form">
                <h2>Create Your Product</h2>
                {alert.message &&
                  <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <form name="form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="form-group">
                        <input type="text" className="form-control" required placeholder="Name Product" name="name" value={product.name} onChange={this.handleChange} />
                      </div>

                      {submitted && !product.name &&
                        <div className="help-block">Name Product is required</div>
                      }
                    </div>
                    <div className="col-lg-12 ">
                      <div className="form-group">
                        <FileBase64
                          multiple={true}
                          onDone={this.getFiles.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="form-group">
                        <input type="text" className="form-control" name="weight" value={product.weight} onChange={this.handleChange} required placeholder="Weight"  />
                      </div>
                      {submitted && !product.weight &&
                        <div className="help-block">Weight is required</div>
                      }
                    </div>

                    <div className="col-lg-12 ">
                      <div className="form-group">
                        <input type="text" className="form-control" name="unit" value={product.unit} onChange={this.handleChange} placeholder="Unit"  />
                      </div>
                      {submitted && !product.unit &&
                        <div className="help-block">Unit is required</div>
                      }
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" type="text" name="certificate" value={product.certificate} onChange={this.handleChange} placeholder="Certificate"  />
                      </div>
                      {submitted && !product.certificate &&
                        <div className="help-block">Certificate is required</div>
                      }
                    </div>
                    <div className="col-lg-12 ">
                      <div className="form-group">
                        <textarea rows="5" cols="20" type="text" className="form-control" required placeholder="Description" name="description" value={product.description} onChange={this.handleChange} />
                      </div>
                      {submitted && !product.description &&
                        <div className="help-block">Description is required</div>
                      }
                    </div>

                    <div className="col-lg-12 ">
                      <div className="form-group">
                        <img style={{ width: "250px" }} src={this.state.imageShow} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <button type="submit" className="default-btn btn-bg-three">
                        Create
                </button>

                      {creating &&
                        <img style={{ height: '50px', width: '50px' }} className="loading-form" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading-gif" />
                      }
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { creating } = state.createproduct;
  const { alert } = state;
  return { creating, alert };
}

const actionCreators = {
  createproduct: userAction.createproduct

}

export default connect(mapState, actionCreators)(CreateProduct);