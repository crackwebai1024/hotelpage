import React from 'react';
import { Redirect } from "react-router-dom";

class Display extends React.Component{
    state = {
        show: false
    }

    toggleshow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        if(this.state.show){
            return <Redirect to="/showlist" />;
        }
        return(
            <div className="display">
                <ul>
                    <li className="width_50 height_100">
                        <img 
                            data-imageno="1" 
                            src="https://img.cuddlynest.com/images/listings/2019/02/10/21/6c901677265a774f1f667f02a514d86b.jpg" 
                            alt="S308-029 UHC SALOU VILLA FAMILY COMPLEX Slide-1"
                        />
                    </li>
                    <li className="width_25 height_50">
                        <img 
                            data-imageno="2" 
                            src="https://img.cuddlynest.com/images/listings/2019/02/10/21/dbf39d789f53d6e8bc66976acca4228a.jpg" 
                            alt="S308-029 UHC SALOU VILLA FAMILY COMPLEX Slide-2"
                        />
                    </li>
                    <li className="width_25 height_50">
                        <img 
                            data-imageno="3" 
                            src="https://img.cuddlynest.com/images/listings/2019/02/10/21/9a1097065e17c8d12bf3d8e8d0984d2a.jpg" 
                            alt="S308-029 UHC SALOU VILLA FAMILY COMPLEX Slide-3"
                        />
                    </li>
                    <li className="width_25 height_50">
                        <img 
                            data-imageno="4" 
                            src="https://img.cuddlynest.com/images/listings/2019/02/10/21/7cf25a2c0f632ebb058725a86c7a14a7.jpg" 
                            alt="S308-029 UHC SALOU VILLA FAMILY COMPLEX Slide-4"
                        />
                    </li>
                    <li className="width_25 height_50">
                        <div className="imgcont">
                            <img 
                                data-imageno="5" 
                                src="https://img.cuddlynest.com/images/listings/2019/02/10/21/ca3cae6bd3c33e2ef00ed4b83b5642f8.jpg" 
                                alt="S308-029 UHC SALOU VILLA FAMILY COMPLEX Slide-5"
                            />
                            <button className="picshow" onClick={this.toggleshow}>show all</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Display