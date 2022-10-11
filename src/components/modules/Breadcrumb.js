
import { Component } from "react";

class Breadcrumb extends Component {
    render() {
        return (
            <div class="breadcrumb">
                <a href="#">My Files</a>
                <i class="fa-solid fa-angle-right"></i>
                <a href="#">Foo Folder</a>
            </div>
        );
    }
}

export default Breadcrumb;