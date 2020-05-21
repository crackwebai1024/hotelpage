import React from 'react';
import DatePicker from 'react-datepicker';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footercontainer col-md-12 row">
                    <div className="col-md-3 item">
                        <h1>Travel is for everyone</h1>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3 item">
                        <li><a>About us</a></li>
                        <li><a>Help</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Privacy policy</a></li>
                        <li><a>Terms and conditions</a></li>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Footer