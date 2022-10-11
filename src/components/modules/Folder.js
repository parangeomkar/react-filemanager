import { Component } from "react";

class Folder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a class="folder file-item" href="#">
                <i class="file-icon fa-solid fa-folder"></i>
                <span class="file-name">{this.props.name}</span>
                <span class="file-modified">{this.props.modified}</span>
                <span class="file-size">-</span>
            </a>
        );
    }
}

export default Folder;