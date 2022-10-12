import { Component } from "react";
import "../css/Navbar.css";
import Search from "./modules/Search";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a className="logo" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 35 50"><g transform="translate(-207 -93)"><path d="M6,0l6,11H0Z" transform="translate(207 100)" fill="#707070" /><path d="M10,0,20,18H0Z" transform="translate(222 93)" fill="#707070" /><path d="M17.5,0,35,32H0Z" transform="translate(242 143) rotate(180)" fill="#3a3a3a" /></g>
                    </svg>
                    <span>FooDrive</span>
                </a>
                <Search />
                <div className="settings">

                </div>
            </nav>
        );
    }
}

export default Navbar;