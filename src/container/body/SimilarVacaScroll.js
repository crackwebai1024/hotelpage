import React from 'react';
import Carousel from './Carousel';

class SimilarVacaScroll extends React.Component{
    render(){
        return(
            <div className="similarscroll">
                <h2>Similar Vacation Rentals</h2>
                <Carousel />
            </div>
        )
    }
}

export default SimilarVacaScroll