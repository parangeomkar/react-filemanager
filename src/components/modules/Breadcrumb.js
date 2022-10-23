
import { Component } from "react";

class Breadcrumb extends Component {
    constructor(props) {
        super(props);

        //bindings 
        this.handleBreadcrumbClick = this.handleBreadcrumbClick.bind(this);
    }

    handleBreadcrumbClick(e) {
        this.props.clickHandler(e.target.id)
    }

    render() {
        return (
            <div className="breadcrumb">
                {
                    this.props.breadcrumbs.map((folder, idx) => {
                        return (<span key={idx}>
                            <a onClick={this.handleBreadcrumbClick} id={folder.id}>{folder.name}</a>
                            {idx < (this.props.breadcrumbs.length - 1)
                                ? < i className="fa-solid fa-angle-right"></i>
                                : null
                            }
                        </span>);
                    })
                }
            </div >
        );
    }
}

export default Breadcrumb;