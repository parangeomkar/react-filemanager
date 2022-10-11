import { Component } from "react";

class File extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a class="file file-item" href="#">
                <i class="file-icon fa-solid fa-file"></i>
                <span class="file-name">{this.props.name}</span>
                <span class="file-modified">{this.props.modified}</span>
                <span class="file-size">{this.props.size}</span>
            </a>
        );
    }
}

export default File;