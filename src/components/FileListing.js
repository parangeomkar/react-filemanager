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
		this.state = {
			rootFolder: props.rootFolder,
			folderTree: []
		}

		//bindings 
		this.folderAction = this.folderAction.bind(this);
	}

	folderAction(id) {
		for (let folder of this.state.rootFolder.children) {
			if (folder.id == id) {
				this.setState({
					rootFolder: folder,
					folderTree: [...this.state.folderTree, { "name": folder.name, "id": folder.id }]
				});
			}
		}
	}

	listFileTree() {
		let { children } = this.state.rootFolder;
		return children.map((file, idx) => {
			if (file.isFolder) {
				return <Folder action={this.folderAction} id={file.id} name={file.name} modified={file.modified} key={idx} />
			} else {
				return <File id={file.id} name={file.name} modified={file.modified} size={file.size} key={idx} />
			}
		})
	}

	render() {
		return (
			<div className="content">
				<Actions />
				<Breadcrumb folderTree={this.state.folderTree} />
				<div className="file-list">
					<Filters />
					<div className="list">
						{this.listFileTree()}
					</div>
				</div>
			</div>
		);
	}
}

export default FileListing;