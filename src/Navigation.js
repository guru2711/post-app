import React,{Component} from "react";
import {NavLink} from "react-router-dom"
import {Navbar} from "react-bootstrap"

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" expand = "lg">
      
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/Post">Post</NavLink> 
        <NavLink className="d-inline p-2 bg-dark text-white" to="/About">About</NavLink>
       
            </Navbar>
        )
    }
}
export default Navigation