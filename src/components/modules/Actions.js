import { Component } from "react";

class Actions extends Component {
    render() {
        return (
            <div class="actions">
                <a href="#"><i class="file-icon fa-solid fa-plus-square"></i> <span>New Folder</span></a>
                <a href="#"><i class="file-icon fa-solid fa-download"></i> <span>Download</span></a>
                <a href="#"><i class="file-icon fa-solid fa-upload"></i> <span>Upload</span></a>
                <a href="#"><i class="file-icon fa-solid fa-trash"></i> <span>Delete</span></a>
                <a></a>
                <a href="#"><i class="file-icon fa-solid fa-list"></i></a>
            </div>
        );
    }
}

export default Actions;