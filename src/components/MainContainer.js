import { Component } from "react";
import ListingContainer from "./ListingContainer";
import SidebarContainer from "./SidebarContainer";

export default class MainContainer extends Component {
    render() {
        return (
            <main>
                <SidebarContainer />
                <ListingContainer />
            </main>
        );
    }
}