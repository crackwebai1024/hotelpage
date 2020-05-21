import React from 'react';

class Accomodation extends React.Component{
    render(){
        return(
            <div className="accomodation">
                <h2 className="accomodation" id="accpolicy">Accomodation policies</h2>
                <ul>
                    <li>
                        <label>Checkin</label>
                        <span>4:00 PM</span>
                    </li>
                    <li>
                        <label>Checkout</label>
                        <span>10:00 AM</span>
                    </li>
                    <li>
                        <label>Cancellation</label>
                        <span>
                            <p>
                                Cancellation policy varies with the check-in dates. 
                                Please select the checkin/checkout date to see the cancellation policy for those dates.
                            </p>
                            <p>
                                CuddlyNest service fee is non-refundable.			 
                                Service fee splitted by host will also be charged from guest.		
                            </p>
                        </span>
                    </li>
                    <li>
                        <label>Extra costs</label>
                        <span>
                            <b>Mandatory services:</b>
                            <p>Air conditioning - included </p>
                            <p>Heating - included </p>
                            <p>Security deposit (refundable) - $328.12/booking</p>
                            <p>Bed linen - included </p>
                            <p>Towels - included</p>
                            <p>Check-in online - included</p>
                            <p>Booking fee - $32.81/booking</p>
                            <p>Uhc payment plan - included</p>
                            <p>Tourist tax - $1.08/person/night</p>
                            <br></br>
                            <b>Optional services (pay on arrival):</b>
                            <p>Parking - $10.94/night</p>
                            <p>Rent a beach / swimming pool towel - $5.47/person</p>
                            <p>Final cleaning - $87.5/booking </p>
                            <p>Arrival out of schedule - $32.81/booking </p>
                            <p>Infant´s pack - $10.94/night</p>
                            <br></br>
                        </span>
                    </li>
                    <li className="minstwy">
                        <label>Minimum Stay </label>
                        <span>
                            Minimum stay varies													
                        </span>
                    </li>
                </ul> 
            </div>
        )
    }
}

export default Accomodation
