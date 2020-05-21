import React from "react"
import { MDBModal, MDBModalBody, MDBModalHeader, MDBContainer, MDBBtn } from 'mdbreact';

class LoginModal extends React.Component{
    render(){
        return(
            <MDBContainer>
                <MDBModal  isOpen ={this.props.modal}  toggle={this.props.toggle} centered>
                    <MDBModalHeader  toggle={this.props.toggle}></MDBModalHeader>
                    <MDBModalBody>
                        <div className="modbod">
                            <MDBBtn
                                color="primary">
                                    <i className="fab fa-facebook-f"></i>
                                    Sign in with Facebook
                            </MDBBtn>
                            <button className="btn google">
                                <i className="fab fa-google"></i>
                                Sign in with google
                            </button>
                            <input className="loginfor" type="email" placeholder="Email Address"/>
                            <input className="loginfor" type="password" placeholder="password" /> 

                            <div className="checkbox">
                                <label>
                                    <input id="remember" type="checkbox" />  Remember Me           
                                </label>
                            </div>
                            <MDBBtn
                                color="pink">
                                    Sign in
                            </MDBBtn>
                            <div className="divrepwd">
                                <a className="repwd">Forgot your password?</a>
                            </div>
                            <div>
                                Don't have an account?<a className="repwd">Register</a>
                            </div>
                        </div>   
                    </MDBModalBody>
                </MDBModal> 
            </MDBContainer>
            );
        } 
}
export default LoginModal;