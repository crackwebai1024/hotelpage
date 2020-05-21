import React from 'react';

class Explanation extends React.Component{
    render(){
        return(
            <div className="explanation row col-md-12">
                <div className="col-md-7">
                    <h1>S308-029 UHC SALOU VILLA FAMILY COMPLEX</h1>
                    <p className="notation">APARTMENT</p>
                </div>
                <div className="col-md-5 buttons">
                    <a><i className="fa fa-save"></i>Save to wish list</a>
                    <a><i className="fa fa-upload" aria-hidden="true"></i>Share this accomodation</a>
                </div>
            </div>
        )
    }
}

export default Explanation