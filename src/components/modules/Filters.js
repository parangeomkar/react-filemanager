import { Component } from "react";

class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="heading">
                <a href="#" class="file-name-heading">Name <i class="file-icon fa-solid fa-arrow-down"></i></a>
                <a href="#" class="file-modified-heading">Modified <i class="file-icon fa-solid fa-arrow-down"></i></a>
                <a href="#" class="file-size-heading">Size <i class="file-icon fa-solid fa-arrow-down"></i></a>
            </div>
        );
    }
}

export default Filters;