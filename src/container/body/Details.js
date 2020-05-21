import React from 'react';
import Accomodation from './Accomodation';
import SimpleMap from './SimpleMap';
class Details extends React.Component{
    render(){
        return(
            <div className="details">
                <div className="information" id="accomodation">
                    <h2>8 guests</h2>
                    <h2>3 bedrooms</h2>
                    <h2>6 beds</h2>
                    <h2>2 bathroom</h2>
                </div>
                <div className="description">
                    <h2 className="theme">The Space</h2>
                    <p> Fantastic high standard pent house apartment in a residential area of Salou. 
                        The complex is of recent construction and offers a beautiful enormous garden 
                        with 2 swimming pools, 1 tennis court and 1 paddle court. 
                        It also offers 2 areas where children can play. 
                        All this of the highest quality. 
                        The apartment and terrace are very spacious. 
                        The apartment is equipped to the highest standards so that your holiday in Salou will 
                        be an unforgettable experience.</p>
                    <p>- Groups of youngsters are not accepted.</p>
                    <p>- Optional parking with supplement and under request and availability.</p>
                    <p>- Outdoor Seasonal Pool.</p>
                    <p>UHC MEASURES - BECAUSE WE CARE ABOUT YOU</p>
                    <p>- Cleaning and Laundry: UHC only works with specialized companies that comply with all safety and hygiene measures.</p>
                    <p>- Check-in: To minimize contact between people, the check-in procedure is exclusively ONLINE.</p>
                    <p>- Questions during your stay: To answer any questions that may arise during your stay without having to go to our offices, 
                        we provide 24-hour service using the following tools: Telephone, EMail and WhatsApp.</p>
                </div>
                <h2 className="theme" id="locate">Location</h2>
                <div className="linkgroup">
                    <a href="#id">Salou</a>
                    <a href="#id">Catalonia</a>
                    <a href="#id">Spain</a>
                </div>
                <div className="map">
                    <SimpleMap />
                </div>
                <div className="amenitiesfacilities" id="amenity">
                    <h2>Amenities and facilities</h2>
                    <div className="row col-sm-12">
                        <div className="col-sm-5">
                            <h3>Amenities</h3>
                            <h4>Kitchen</h4>
                            <h4>TV</h4>
                            <h4>Essentials</h4>
                            <h4>Air conditioning</h4>
                            <h4>Heating</h4>
                        </div>
                        <div className="col-sm-7">
                            <h3>Facilities</h3>
                            <h4>Washer</h4>
                            <h4>Smoking allowed</h4>
                            <h4>Elevator in building</h4>
                            <h4>Shared Pool</h4>
                            <h4>Familiy/Kid Friendly</h4>
                            <h4>Iron</h4>
                            <h4>Dishwasher</h4>
                            <h4></h4>
                        </div>
                    </div>
                    <a className="showbtn">Show all 12 amenities and facilities</a>
                    <Accomodation />
                    <h2 id="host">About the host</h2>
                    <p>This listing is hosted by our premium partner</p>
                    <a><i className="fa fa-flag">Report this property</i></a>
                </div>
            </div>
        )
    }
}

export default Details