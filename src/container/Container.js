import React from 'react';
import Header from './header/Header';
import BodyContainer from './body/BodyContain';
import Footer from './footer/Footer';

class Container extends React.Component{
    render(){
        return(
            <div>
                <div className="maincontainer">
                    <Header />
                    <BodyContainer />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Container