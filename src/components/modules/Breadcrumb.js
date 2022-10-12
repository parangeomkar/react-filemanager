
import { Component } from "react";

class Breadcrumb extends Component {
    render() {
        return (
            <div className="breadcrumb">
                <a href="#">My Files</a>
                <i className="fa-solid fa-angle-right"></i>
                <a href="#">Foo Folder</a>
            </div>
        );
    }
}

export default Breadcrumb;