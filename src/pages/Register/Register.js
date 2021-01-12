import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { userAction } from '../../actions';
import { connect } from 'react-redux';
import { history } from '../../helpers';


class Register extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
    this.state = {
      files: [],
      imageShow:null,
      account: {
        name: '',
        address: '',
        owner: '',
        base64Image: '',
        description: '',
        password: ''


      },
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}



handleChange(event) {
  const { name, value } = event.target;
  const { account } = this.state;
  this.setState({
    account: {
      ...account,
      [name]: value
    }
  });

}
getFiles(files) {
  console.log(files[0].base64)

  this.setState({
    imageShow:files[0].base64,
    files: files,
    account : {base64Image:files[0].base64.slice(22,files[0].base64.length)}
     });

}



handleSubmit(event) {
  
  
 
  event.preventDefault();


    this.setState({ submitted: true });
    const { account } = this.state;
    // var sliceAvatar = (account.base64Image);
    // account.base64Image = sliceAvatar.slice(12, sliceAvatar.length);
    if (account.name && account.owner && account.description && account.password && account.address && account.base64Image   ) {
      this.props.register(account);
    }
}



    render() {
    const { registering } = this.props;
    const { account, submitted } = this.state;
    const { alert } = this.props;
 
        return (
            <div className="user-area pt-100 pb-70">
  <div className="container">
    <div className="user-width">
      <div className="user-form">
        <div className="contact-form">
          <h2>Register Now</h2>
          {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
          <form  name="form" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-lg-12 ">
                <div className="form-group">
                  <input type="text" className="form-control" required data-error="Please enter your Username" placeholder="Enter Your Username" name="name" value={account.name} onChange={this.handleChange} />
                </div>

                {submitted && !account.name &&
                    <div className="help-block">Name is required</div>
                  }
              </div>
              <div className="col-lg-12 ">
                <div className="form-group">
                  <input type="text" className="form-control" required data-error="Please enter your Owner" placeholder="Enter Your Owner" name="owner" value={account.owner} onChange={this.handleChange} />
                </div>
                {submitted && !account.owner &&
                    <div className="help-block">Owner is required</div>
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
                  <input type="text" className="form-control" required data-error="Please enter your Address" placeholder="Enter Your Address" name="address" value={account.address} onChange={this.handleChange} />
                </div>
                {submitted && !account.address &&
                    <div className="help-block">Address is required</div>
                  }
              </div>
             
              <div className="col-lg-12 ">
                <div className="form-group">
                  <textarea  rows="5" cols="20" type="text" className="form-control" required data-error="Please enter your Description" placeholder="Enter Your Description"  name="description" value={account.description} onChange={this.handleChange} />
                </div>
                {submitted && !account.description &&
                    <div className="help-block">Description is required</div>
                  }
              </div>
              <div className="col-12">
                <div className="form-group"> 
                  <input className="form-control" type="password"  placeholder="Password"  name="password" value={account.password} onChange={this.handleChange}/>
                </div>
                {submitted && !account.password &&
                    <div className="help-block">Password is required</div>
                  }
              </div>
              <div className="col-lg-12 ">
                <div className="form-group">
               <img style={{width:"250px"}} src={this.state.imageShow} alt="" />
                </div>
              </div>
              <div className="col-lg-12 ">
                <button type="submit" className="default-btn btn-bg-three">
                  Register Now
                </button>

                {registering &&
                    <img style={{height:'50px',width:'50px'}} className="loading-form" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading-gif" />
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
  const { registering } = state.registration;
  const { alert } = state;
  return { registering, alert };
}

const actionCreators = {
  register: userAction.register

}

export default connect(mapState, actionCreators)(Register);