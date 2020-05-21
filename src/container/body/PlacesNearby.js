import React from 'react';

class PlacesNearby extends React.Component{
    render(){
        return(
            <div className="placesnearby"> 
                <h3>Places nearby</h3>
                <div className="col-md-12 row">
                    <div className="col-md-3">
                        <h5>Calp Vacation Rentals</h5>
                        <h5>Valencia Vacation Rentals</h5>
                        <h5>Benissa Vacation Rentals</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>Denia Vacation Rentals</h5>
                        <h5>Xabia Vacation Rentals</h5>
                        <h5>Oliva Vacation Rentals</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>Grau I Platja Vacation Rentals</h5>
                        <h5>Torrevieja Vacation Rentals</h5>
                        <h5>Orihuela Vacation Rentals</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>Benidorm Vacation Rentals</h5>
                        <h5>Cullera Vacation Rentals</h5>
                        <h5>Alcossebre Vacation Rentals</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlacesNearby