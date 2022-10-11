import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Pokegame from "./Pokegame"
class Edwin extends Component{
    render(){
        return(
            <div>
            <App/>
            <Pokegame/>
            </div>
        );
    }
}
ReactDOM.render(<Edwin/>,document.getElementById("root"));