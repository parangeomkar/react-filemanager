
import { Component } from "react";
import GlobalStateContext from "../../GlobalStateContext";

class Breadcrumb extends Component {
    static contextType = GlobalStateContext;

    constructor(props) {
        super(props);

        //bindings 
        this.handleBreadcrumbClick = this.handleBreadcrumbClick.bind(this);
    }

    handleBreadcrumbClick(e) {
        this.props.clickHandler(e.target.id);
    }

    render() {
        const { globalState } = this.context;

        return (
            <div className="breadcrumb">
                {
                    globalState.currentBreadcrumbs.map((folder, idx) => {
                        return (<span key={idx}>
                            <a onClick={this.handleBreadcrumbClick} id={folder.id}>{folder.name}</a>
                            {idx < (globalState.currentBreadcrumbs.length - 1)
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