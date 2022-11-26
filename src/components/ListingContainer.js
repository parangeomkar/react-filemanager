import { Component } from "react";
import Actions from "./action-modules/Actions";
import Breadcrumb from "./action-modules/Breadcrumb";
import Filters from "./action-modules/Filters";
import List from "./list-modules/List";
import GlobalStateContext from "../GlobalStateContext";

import "../css/Listing.css";

export default class ListingContainer extends Component {
	static contextType = GlobalStateContext;

	constructor() {
		super();

		//bindings 
		this.setFolder = this.setFolder.bind(this);
		this.createFileTreeMap = this.createFileTreeMap.bind(this);

		//global properties
		this.fileTreeMap = new Map();
	}

	componentDidMount() {
		//load file tree structure
		let fileTree = require("./filetree.json");

		//create map from JSON and set current working folder
		this.createFileTreeMap(fileTree.root, []);
		this.setFolder(fileTree.root.id);
	}

	/**
	 * 
	 * @param {*} parentFolder takes an object of a parent folder
	 * @param {*} parentTree takes an array of directories from root to current folder
	 * @brief creates a Map data-type with folder ID as a key
	 */
	createFileTreeMap(parentFolder, parentTree) {
		parentTree.push({
			name: parentFolder.name,
			id: parentFolder.id
		});

		this.fileTreeMap.set(parentFolder.id, { ...parentFolder, "breadcrumbs": parentTree });

		if (parentFolder.isFolder) {
			parentFolder.children.map((item) => {
				this.createFileTreeMap(item, parentTree.slice(0));
				return false;
			});
		}
	}

	/**
	 * 
	 * @param {*} folderID takes an unique ID of a folder
	 * @brief sets current working directory
	 */
	setFolder(folderID) {
		const { setGlobalState } = this.context;
		const folder = this.fileTreeMap.get(folderID);

		setGlobalState({
			currentFolder: folderID,
			currentBreadcrumbs: folder.breadcrumbs
		});
	}


	render() {
		const { globalState } = this.context;

		return (
			<div className="content">
				<Actions />
				<Breadcrumb clickHandler={this.setFolder} />
				<div className="file-list">
					<Filters />
					<div className="list">
						{
							globalState.currentFolder != null
								? <List fileTreeMap={this.fileTreeMap} setFolder={this.setFolder} />
								: <span>Loading...</span>
						}
					</div>
				</div>
			</div>
		);
	}
}