import React from 'react';


class HorMenu extends React.Component{
    state = {
        currency: "CLP",
        currencytext: "Chilean peso",
        dropdown: false,
    }

    setcurrency = e => {
        debugger
        this.setState({
            currency: e.target.name,
            currencytext: e.target.innerText,
            dropdown: false
        })
    }

    toggle = () => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }



    render(){
        return(
        <div className="hpv2_menu_logout">
            <ul>             
                <li>
                    <div className="currentcurrency">
                        <a className="menulist" onClick={this.toggle}>
                            {this.state.currency}
                            <i className="fa fa-angle-down" aria-hidden="true" title="cuddlynest dropdown">
                            </i>
                        </a>
                    </div>
                    {this.state.dropdown?
                    <div className="currency_box">
                        <div className="top_currency">
                            <ul className="currency_selector">
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name={this.state.currency}>{this.state.currencytext}</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="USD">US Dollar</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="EUR">Euro</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="GBP">Pound sterling</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="CNY">Chinese yuan</a></li>
                            </ul>  
                        </div>
                        <div className="currency_menu">
                            <ul className="currency_selector">  
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="AED">Emirati dirham</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="ARS">Argentine peso</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="AUD">Australian dollar</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="BRL">Brazilian real</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="CAD">Canadian dollar</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="CHF">Swiss franc</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="CZK">Czech koruna</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="HKD">Hong Kong dollar</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="HUF">Hungarian florint</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="ILS">Israeli new shekel</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="INR">Indian rupee</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="JPY">Japanese yen</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="MXN">Mexican peso</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="NOK">Norwegian krone</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="NZD">New Zealand dollar</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="PLN">Polish zloty</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="RON">Romanian leu</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="RUB">Russian ruble</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="SAR">Saudi Riyal</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="SEK">Swedish krona</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="TRY">Turkish lira</a></li>
                                <li className="currency_dropdown" onClick={this.setcurrency}><a name="ZAR">South African rand</a></li>
                            </ul>  
                        </div>
                    </div>
                    :""}
                </li>
                <li><a className="menulist" onClick={this.props.togglemodal}>Log in</a></li>
                <li><a className="menulist" href="https://www.cuddlynest.com/pages/help">Help</a></li>   
                <li><a className="menulist" href="https://www.cuddlynest.com/list_space"> List your property</a></li>
            </ul> 
        </div> 
        )
    }
}

export default HorMenu