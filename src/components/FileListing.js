import { Component } from "react";
import File from "./modules/File";
import Folder from "./modules/Folder";
import Actions from "./modules/Actions";
import Breadcrumb from "./modules/Breadcrumb";
import Filters from "./modules/Filters";

import "../css/FileListing.css";

const fileTree = require("./filetree.json");
let fileTreeMap = new Map();


class FileListing extends Component {
	constructor(props) {
		super(props);

		//states
		this.state = {
			currentFolder: "root",
			currentBreadcrumbs: [{
				name: fileTree.root.name,
				id: "root"
			}]
		}

		//bindings 
		this.setFolder = this.setFolder.bind(this);
		this.breadcrumbClickHandler = this.breadcrumbClickHandler.bind(this);
		this.folderOpenHandler = this.folderOpenHandler.bind(this);


		//initialize
		this.createFileMap(fileTree.root, []);
	}

	createFileMap(parentFolder, parentTree) {
		parentTree.push({
			name: parentFolder.name,
			id: parentFolder.id
		});

		fileTreeMap.set(parentFolder.id, { ...parentFolder, "breadcrumbs": parentTree });

		parentFolder.children.map((item) => {
			if (item.isFolder) {
				this.createFileMap(item, parentTree.slice(0));
			}
		});
	}

	setFolder(folderID) {
		const folder = fileTreeMap.get(folderID);

		this.setState({
			currentFolder: folderID,
			currentBreadcrumbs: folder.breadcrumbs
		});
	}

	breadcrumbClickHandler(folderID) {
		this.setFolder(folderID);
	}

	folderOpenHandler(folderID) {
		this.setFolder(folderID);
	}

	listFileTree() {
		const folderTree = fileTreeMap.get(this.state.currentFolder);

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
						{this.listFileTree(this.state.currentFolder)}
					</div>
				</div>
			</div>
		);
	}
}

export default FileListing;