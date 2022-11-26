import { Component } from "react";
import "../css/Sidebar.css";

export default class SidebarContainer extends Component {
	render() {
		return (<div className="sidebar">
			<a href="#" id="mydrive-btn" className="item-selected"><i className="fa-regular fa-hard-drive"></i> <span>My Files</span></a>
			<a href="#" id="starred-btn"><i className="fa-regular fa-star"></i> <span>Starred</span></a>
			<a href="#" id="bin-btn"><i className="fa-regular fa-trash-can"></i> <span>Recycle Bin</span></a>
		</div>);
	}
}
