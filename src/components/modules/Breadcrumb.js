
import { Component } from "react";

class Breadcrumb extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.folderTree)
        return (
            <div className="breadcrumb">
                <a href="#">My Files</a>
                {
                    this.props.folderTree.map((folderName,idx) => {
                        return (<span key={idx}>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="#">{folderName.name}</a>
                            </span>);
                    })
                }
            </div>
        );
    }
}

export default Breadcrumb;