import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  


    render() {
        return (
          <footer className="footer-area footer-bg">
          <div className="container">
            <div className="footer-top pt-100 pb-70">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-widget-color-2">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src="https://thegioithemes.com/try/footer-logo.png" alt="Images" />
                      </Link>
                    </div>
                    <p>
                      Agricultural Products, Sources in Blockchain. Let's join.
                    </p>
                    <ul className="footer-list-contact">
                      <li>
                        <i className="bx bx-home" />
                        <a href="#">FPTU - Road D1, Lot E2a-7 High Tech Park, Ho Chi Minh City, Vietnam</a>
                      </li>
                      <li>
                        <i className="bx bx-phone-call" />
                        <a href="tel:+1(123)-456-7890">+ (123) 456 789</a>
                      </li>
                  
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-widget-color-2">
                    <h3>Services</h3>
                    <ul className="footer-list">
                      <li>
                        <Link to="/login" target="_blank">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/register" target="_blank">
                         Become As Source
                        </Link>
                      </li>
                      
                      
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-widget-color-2">
                    <h3>Menu</h3>
                    <ul className="footer-list">
                      <li>
                        <Link to="/" target="_blank">
                          See All Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/sources" target="_blank">
                        See All Sources
                        </Link>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-widget-color-2">
                    <h3>Follow Us</h3>
                    <p>Agricultural Products, Sources in Blockchain. Let's join.</p>
                    <form className="footer-form-area">
                      <input type="email" className="form-control" placeholder="Email" />
                      <button className="subscribe-btn" type="submit">
                        <i className="bx bx-paper-plane" />
                      </button>
                    </form>
                    <ul className="social-link">
                      <li>
                        <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="bx bxl-youtube" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right-area-three">
              <div className="copy-right-text">
                <p>
                  Copyright @2020 AgriTrack. All Rights Reserved by
                  
                </p>
              </div>
            </div>
          </div>
        </footer>
        
        );
    }
}

export default Footer;