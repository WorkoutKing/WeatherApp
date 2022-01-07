import React from "react";
import Form from "../Form";
import './header.modules.scss'





class Header extends React.Component{
    render(){
        return(
            <>
            <header>
                <h1>Orų Prognozės</h1>
                <Form/>       
            </header>
            </>
        )
    }
}

export default Header