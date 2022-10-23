import { Component } from "react";

class Folder extends Component {
    constructor(props) {
        super(props);

        //bindings 
        this.handleFolderOpen = this.handleFolderOpen.bind(this);
    }

    handleFolderOpen() {
        this.props.action(this.props.id)
    }

    render() {
        return (
            <a onDoubleClick={this.handleFolderOpen} className="folder file-item" href="#">
                <i className="file-icon fa-solid fa-folder"></i>
                <span className="file-name">{this.props.name}</span>
                <span className="file-modified">{this.props.modified}</span>
                <span className="file-size">-</span>
            </a>
        );
    }
}

export default Folder;