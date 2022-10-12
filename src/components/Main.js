import { Component } from "react";
import FileListing from "./FileListing";
import Sidebar from "./Sidebar";
const fileTree = require("./filetree.json");

class Main extends Component {
    render() {
        return (
            <main>
                <Sidebar />
                <FileListing rootFolder={fileTree.root} />
            </main>
        );
    }
}

export default Main;