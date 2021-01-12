import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history  } from '../helpers';
const axios = require('axios') ;
export const userAction = {
   login,
    logout,
    register,
    createproduct
};


const options = {
    headers: {
        'Content-Type': 'application/json',

    }
  };


 
 function login(name, password) {
    
    return  dispatch => {
        
        dispatch(request({ name }));
          axios.post('https://api.agritrack.asia/api/Auth/Login', JSON.stringify({name, password}),options
        )
       .then( res => { 
            dispatch(success(res.data));
            dispatch(alertActions.success('Login Successfully'));
            localStorage.setItem('isAuth',res.data.token);
            localStorage.setItem('isId',res.data.accountId);
            history.push('/my-account');
            window.location.reload();
        
       
          
            
     })
       .catch(err=>{
           dispatch(failure(err));
           dispatch(alertActions.error(err.response.data));
       }  ) ;
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(account) {
    return dispatch => {
        dispatch(request(account));
        axios.post('https://api.agritrack.asia/api/Auth/Register', JSON.stringify(account),options
       )
      .then(res => {
        
        if(res.status===200) {
            dispatch(success());
            dispatch(alertActions.success('Create Source Successfully! Login Now! '));
            
        }
   
        
        
    })
      .catch(err => {
        console.log('inside catch block.');
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            dispatch(failure(err));
            dispatch(alertActions.error('Some fields wrong or already exist, please check again!'));
            console.log(err.response.data);
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.log('Error', err.message);
            
        }

        console.log(JSON.stringify(err));
    });
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}



function createproduct(product) {
    return dispatch => {
        dispatch(request(product));
        axios.post('https://api.agritrack.asia/api/Product/Create', JSON.stringify(product),{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer `+localStorage.getItem('isAuth')
            }
          }
       )
      .then(res => {
        if(res.status===200) {
            dispatch(success());
            dispatch(alertActions.success('Create Product Successfully!  '));
            
        }
    })
      .catch(err => {
        console.log('inside catch block.');
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            dispatch(failure(err));
            dispatch(alertActions.error('Some fields wrong or already exist, please check again!'));
            console.log(err.response.data);
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.log('Error', err.message);
            
        }

        console.log(JSON.stringify(err));
    });
    };

    function request(user) { return { type: userConstants.CREATEPRODUCT_REQUEST, user } }
    function success(user) { return { type: userConstants.CREATEPRODUCT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CREATEPRODUCT_FAILURE, error } }
}





