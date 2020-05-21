import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import $ from 'jquery';

class MultiCarouselPage extends React.Component{
    render(){
  return (
    <MDBContainer>
        <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
            <MDBCarouselInner>
            <MDBRow>
                <MDBCarouselItem itemId="1">
                    <MDBRow>
                <MDBCol md="3" sm="3" xl="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2019/02/27/23/t/fe7b061c2d4fe0975253d901331a762c_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3" sm="3" xl="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2019/02/27/23/t/fe7b061c2d4fe0975253d901331a762c_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3" sm="3" xl="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2019/02/27/23/t/fe7b061c2d4fe0975253d901331a762c_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3" sm="3" xl="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
                
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBRow>
                <MDBCol md="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3" sm="3" xl="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBRow>
                <MDBCol md="3" sm="3" xl="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                    <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://img.cuddlynest.com/images/listings/2020/02/05/15/t/fc7bc14ed164fd3ac83eea7ee0116f7f_460x327.jpg" />
                    <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
                </MDBCarouselItem>
            </MDBRow>
            </MDBCarouselInner>
        </MDBCarousel>
    </MDBContainer>
  );
    }
}

export default MultiCarouselPage;