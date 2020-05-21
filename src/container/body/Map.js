import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map (){
        return(
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 45.421532, lng:-75.697189 }}
        />
        )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GMap() {
    return (<div style={{height:"100px",width:"100px"}}>
        <WrappedMap 
            googleMapUrl={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div style={{height:"100%"}}></div>}
            containerElement={<div style={{height:"100%"}}></div>}
            mapElement={<div style={{height:"100%"}}></div>}
        />
    </div>)
}