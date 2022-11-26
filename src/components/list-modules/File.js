import { Component } from "react";

class File extends Component {
    constructor(props) {
        super(props);

        // bindings
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleSelect(event);
    }

    render() {
        const activeClass = this.props.selected ? "item-selected" : "";
        return (
            <a onClick={this.handleClick} className={"file file-item " + activeClass} href="#" id={this.props.file.id}>
                <i className="file-icon fa-solid fa-file"></i>
                <span className="file-name">{this.props.file.name}</span>
                <span className="file-modified">{this.props.file.modified}</span>
                <span className="file-size">{this.props.file.size}</span>
            </a>
        );
    }
}

export default File;