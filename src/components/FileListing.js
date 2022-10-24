import { Component } from "react";
import File from "./modules/File";
import Folder from "./modules/Folder";
import Actions from "./modules/Actions";
import Breadcrumb from "./modules/Breadcrumb";
import Filters from "./modules/Filters";

import "../css/FileListing.css";

class FileListing extends Component {
	constructor(props) {
		super(props);

		//states
		this.state = {
			currentFolder: null,
			currentBreadcrumbs: []
		}

		//bindings 
		this.setFolder = this.setFolder.bind(this);
		this.createFileMap = this.createFileMap.bind(this);
		this.listFileTree = this.listFileTree.bind(this);
		this.breadcrumbClickHandler = this.breadcrumbClickHandler.bind(this);
		this.folderOpenHandler = this.folderOpenHandler.bind(this);

		//global properties
		this.fileTreeMap = new Map();
	}

	componentDidMount() {
		//load file tree structure
		let fileTree = require("./filetree.json");

		//create map from JSON and set current working folder
		this.createFileMap(fileTree.root, []);
		this.setFolder(fileTree.root.id);
	}

	/**
	 * 
	 * @param {*} parentFolder takes an object of a parent folder
	 * @param {*} parentTree takes an array of directories from root to current folder
	 * @brief creates a Map data-type with folder ID as a key
	 */
	createFileMap(parentFolder, parentTree) {
		parentTree.push({
			name: parentFolder.name,
			id: parentFolder.id
		});

		this.fileTreeMap.set(parentFolder.id, { ...parentFolder, "breadcrumbs": parentTree });

		if (parentFolder.isFolder) {
			parentFolder.children.map((item) => {
				this.createFileMap(item, parentTree.slice(0));
			});
		}
	}

	/**
	 * 
	 * @param {*} folderID takes an unique ID of a folder
	 * @brief sets current working directory
	 */
	setFolder(folderID) {
		const folder = this.fileTreeMap.get(folderID);

		this.setState({
			currentFolder: folderID,
			currentBreadcrumbs: folder.breadcrumbs
		});
	}

	/**
	 * 
	 * @param {*} folderID takes an unique ID of a folder
	 * @brief handles breadcrumb navigation functionality
	 */
	breadcrumbClickHandler(folderID) {
		this.setFolder(folderID);
	}

	/**
	 * 
	 * @param {*} folderID takes an unique ID of a folder
	 * @brief handles folder open functionality
	 */
	folderOpenHandler(folderID) {
		this.setFolder(folderID);
	}

	/**
	 * 
	 * @returns JSX of file and folder list
	 */
	listFileTree() {
		const folderTree = this.fileTreeMap.get(this.state.currentFolder);

		return folderTree.children.map((file, idx) => {
			if (file.isFolder) {
				return <Folder action={this.folderOpenHandler} id={file.id} name={file.name} modified={file.modified} key={idx} />
			} else {
				return <File id={file.id} name={file.name} modified={file.modified} size={file.size} key={idx} />
			}
		});
	}

	render() {
		return (
			<div className="content">
				<Actions />
				<Breadcrumb breadcrumbs={this.state.currentBreadcrumbs} clickHandler={this.breadcrumbClickHandler} />
				<div className="file-list">
					<Filters />
					<div className="list">
						{this.state.currentFolder != null
							? this.listFileTree(this.state.currentFolder)
							: <span>Loading...</span>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default FileListing;