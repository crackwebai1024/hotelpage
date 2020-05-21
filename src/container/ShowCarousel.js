import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import { Redirect } from "react-router-dom";

class ShowCarousel extends React.Component{
    state = {
        show: true
    } 
    toggleshow = () => {
        this.setState({
            show: false
        })
    }
render() {
    if(this.state.show === false){
        return <Redirect to="/" />
    }
  return (
    <div className="middlecontainer">
    <MDBContainer className="listcarousel">
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-90"
                src="https://img.cuddlynest.com/images/listings/2019/02/10/21/6c901677265a774f1f667f02a514d86b.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-90"
                src="https://img.cuddlynest.com/images/listings/2019/02/10/21/dbf39d789f53d6e8bc66976acca4228a.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-90"
                src="https://img.cuddlynest.com/images/listings/2019/02/10/21/9a1097065e17c8d12bf3d8e8d0984d2a.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-90"
                src="https://img.cuddlynest.com/images/listings/2019/02/10/21/7cf25a2c0f632ebb058725a86c7a14a7.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-90"
                src="https://img.cuddlynest.com/images/listings/2019/02/10/21/ca3cae6bd3c33e2ef00ed4b83b5642f8.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <a className="return" onClick={this.toggleshow}><i className="fa fa-times fa-2x" aria-hidden="true"></i></a>
    </MDBContainer>
    </div>
  );
}
}

export default ShowCarousel;