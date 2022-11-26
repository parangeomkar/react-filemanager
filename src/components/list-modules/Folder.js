import { Component } from "react";

class Folder extends Component {
    constructor(props) {
        super(props);

        //bindings 
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDoubleClick() {
        this.props.openHandler(this.props.file.id)
    }


    handleClick(event) {
        event.preventDefault();
        this.props.handleSelect(event);
    }

    render() {
        const activeClass = this.props.selected ? "item-selected" : "";
        return (
            <a onClick={this.handleClick} onDoubleClick={this.handleDoubleClick} id={this.props.file.id}
                className={"folder file-item " + activeClass} href="#">
                <i className="file-icon fa-solid fa-folder"></i>
                <span className="file-name">{this.props.file.name}</span>
                <span className="file-modified">{this.props.file.modified}</span>
                <span className="file-size">-</span>
            </a>
        );
    }
}

export default Folder;