import { Component } from "react";
import FileListing from "./FileListing";
import Sidebar from "./Sidebar";

class Main extends Component {
    render() {
        return (
            <main>
                <Sidebar />
                <FileListing />
            </main>
        );
    }
}

export default Main;