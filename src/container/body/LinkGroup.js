import React from 'react';

class LinkGroup extends React.Component{
    render(){
        return(
            <div className="linkgroup">
                <a href="#accomodate">About this accommodation</a>
                <a href="#locate">Location</a>
                <a href="#amenity">Amenities and facilities</a>
                <a href="#accpolicy">Accommodation policies</a>
                <a href="#host">About the host</a>
            </div>
        )
    }
}

export default LinkGroup