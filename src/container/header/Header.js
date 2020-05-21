import React from 'react';
import HorMenu from './HorMenu';
import LoginModal from './LoginModal';

class Header extends React.Component{
    state = {
        modal: false
    }
    togglemodal = () => {
        debugger
        this.setState({
            modal: !this.state.modal
        })
    }
    render(){
        return(
            <div className="header">
                <img 
                    id="logo-image" 
                    src="https://www.cuddlynest.com/images/logo/cn_logo_hpv2_clor_en.png?v=4" 
                    alt="Logo" 
                />
                <div className="inputbox">
                    <span className="iconbox">
                        <i className="fa fa-search"></i>
                    </span>
                    <input 
                        name="city" 
                        id="autocompleteNew" 
                        placeholder="Search your destination here..." 
                        type="text" 
                    />
                </div>
                
                <div className="horizon_menu_bar">
                    <HorMenu togglemodal={this.togglemodal}/>       
                </div>
                <div>
                    <LoginModal toggle={this.togglemodal} modal={this.state.modal}/> 
                </div>
            </div>
        )
    }
}

export default Header