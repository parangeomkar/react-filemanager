import { Component } from "react";
import File from "./modules/File";
import Folder from "./modules/Folder";
import Actions from "./modules/Actions";
import Breadcrumb from "./modules/Breadcrumb";
import Filters from "./modules/Filters";
import "../css/FileListing.css";

class FileListing extends Component {
	render() {
		return (
			<div class="content">
				<Actions />
				<Breadcrumb />
				<div class="file-list">
					<Filters />
					<div class="list">
						<Folder name="My Folder" modified="11-10-2022" />
						<File name="myfile.txt" size="110KB" modified="11-10-2022" />
					</div>
				</div>
			</div>
		);
	}
}

export default FileListing;