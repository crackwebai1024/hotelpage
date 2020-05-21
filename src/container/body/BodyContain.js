import React from 'react';
import Display from './Display';
import Explanation  from './Explanation';
import LinkGroup from './LinkGroup';
import Content from './Content';
import SimilarVacaScroll from './SimilarVacaScroll';
import PlacesNearby from './PlacesNearby';

class BodyContain extends React.Component{
    render(){
        return(
            <div className="bodycontain">
                <Display />
                <Explanation />
                <LinkGroup />
                <Content />
                <SimilarVacaScroll />
                <PlacesNearby />
            </div>
        )
    }
}

export default BodyContain