import { Component } from "react";

class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="heading">
                <a href="#" className="file-name-heading">Name <i className="file-icon fa-solid fa-arrow-down"></i></a>
                <a href="#" className="file-modified-heading">Modified <i className="file-icon fa-solid fa-arrow-down"></i></a>
                <a href="#" className="file-size-heading">Size <i className="file-icon fa-solid fa-arrow-down"></i></a>
            </div>
        );
    }
}

export default Filters;