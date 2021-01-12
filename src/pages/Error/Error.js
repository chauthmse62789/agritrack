import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="error-content">
                            <h1>4 <span>0</span> 4</h1>
                            <h3>Oops! Page Not Found</h3>
                            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                            <a href="index.html" className="default-btn btn-bg-three">
                                Return To Home Page
        </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Error;