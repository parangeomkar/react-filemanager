import { Component } from "react";

class File extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="file file-item" href="#">
                <i className="file-icon fa-solid fa-file"></i>
                <span className="file-name">{this.props.name}</span>
                <span className="file-modified">{this.props.modified}</span>
                <span className="file-size">{this.props.size}</span>
            </a>
        );
    }
}

export default File;