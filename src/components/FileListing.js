import { Component } from "react";
import "../css/FileListing.css";

class FileListing extends Component {
	render() {
		return (
			<div class="content">
				<div class="actions">
					<a href="#"><i class="file-icon fa-solid fa-plus-square"></i> <span>New Folder</span></a>
					<a href="#"><i class="file-icon fa-solid fa-download"></i> <span>Download</span></a>
					<a href="#"><i class="file-icon fa-solid fa-upload"></i> <span>Upload</span></a>
					<a href="#"><i class="file-icon fa-solid fa-trash"></i> <span>Delete</span></a>
					<a></a>
					<a href="#"><i class="file-icon fa-solid fa-list"></i></a>
				</div>
				<div class="breadcrumb">
					<a href="#">My Files</a>
					<i class="fa-solid fa-angle-right"></i>
					<a href="#">Foo Folder</a>
				</div>
				<div class="file-list">
					<div class="heading">
						<a href="#" class="file-name-heading">Name <i class="file-icon fa-solid fa-arrow-down"></i></a>
						<a href="#" class="file-modified-heading">Modified <i class="file-icon fa-solid fa-arrow-down"></i></a>
						<a href="#" class="file-size-heading">Size <i class="file-icon fa-solid fa-arrow-down"></i></a>
					</div>
					<div class="list">
						<a class="folder file-item" href="#">
							<i class="file-icon fa-solid fa-folder"></i>
							<span class="file-name">My Folder 1</span>
							<span class="file-modified">11-10-2022</span>
							<span class="file-size">-</span>
						</a>
						<a class="folder file-item" href="#">
							<i class="file-icon fa-solid fa-folder"></i>
							<span class="file-name">My Folder 2</span>
							<span class="file-modified">12-10-2022</span>
							<span class="file-size">-</span>
						</a>

						<a class="file file-item" href="#">
							<i class="file-icon fa-solid fa-file-pdf"></i>
							<span class="file-name">Foo Document.pdf</span>
							<span class="file-modified">11-10-2022</span>
							<span class="file-size">100 KB</span>
						</a>
						<a class="file file-item" href="#">
							<i class="file-icon fa-solid fa-file"></i>
							<span class="file-name">Unknown Document</span>
							<span class="file-modified">11-10-2022</span>
							<span class="file-size">1211 KB</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default FileListing;