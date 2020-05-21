import React from 'react';
import Booking from './Booking';
import Details from './Details';

class Content extends React.Component{
    render(){
        return(
            <div className="content col-md-12 row">
                <div className="col-md-8">
                    <Details />
                </div>
                <div className="col-md-4">
                    <Booking />
                </div>
            </div>
        )
    }
}

export default Content