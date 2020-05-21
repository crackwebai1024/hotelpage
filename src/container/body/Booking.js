import React from 'react';

class Booking extends React.Component{
    state = {
        startday: "",
        endday: "",
    }

    handleChange = e => {
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getalert = () => {
        const date1 = new Date(this.state.startday);
        const date2 = new Date(this.state.endday);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        debugger
        if(diffDays >= 7){
            return false
        }
        return true 
    }

    render(){
        return(
            <div className="booking card">
                <h4 className="title">Booking Summary</h4>
                <label>Dates</label>
                <div className="inputbox row">
                    <input type="date" className="startday" name="startday" onChange={this.handleChange}></input>
                    <input type="date" className="endday" name="endday" onChange={this.handleChange}></input>
                    {this.getalert()?
                    <p className="error">Minimum stay should be 7 days for these dates</p>:""}
                </div>
                
                <div className="int"></div>
                <label>Guest</label>
                <div className="row">
                    <span className="guestnum">Number of guests</span>
                    <input type="number" className="guest"></input>
                </div>
                {this.getalert()?
                <div className="buttonbox">
                    <button className="btn btn-secondary" disabled>Book Now</button>
                    <p className="alert">You won't be charged yet</p>
                </div>
                :
                <button className="btn btn-secondary">Book Now</button>}
            </div>
        )
    }
}

export default Booking