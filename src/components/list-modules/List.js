import { Component } from "react";
import File from "./File";
import Folder from "./Folder";
import GlobalStateContext from "../../GlobalStateContext";

export default class List extends Component {
    static contextType = GlobalStateContext;

    constructor() {
        super();

        //bindings
        this.handleItemSelection = this.handleItemSelection.bind(this);
    }

    handleItemSelection(event) {
        const { setGlobalState, globalState } = this.context;
        let { selectedItems } = globalState;

        // check if current item already exists
        const existingIndex = selectedItems.indexOf(event.currentTarget.id);


        // check for ctrl+click event
        if (event.ctrlKey) {
            if (existingIndex != -1) {
                // remove if already exists
                selectedItems.splice(existingIndex, 1);
            } else {
                // add as multi select on ctrl+click
                selectedItems.push(event.currentTarget.id);
            }

        } else {
            if (existingIndex != -1 && selectedItems.length == 1) {
                // clear selection if already exists
                selectedItems = [];
            } else {
                // single selection
                selectedItems = [event.currentTarget.id];
            }
        }


        setGlobalState({ selectedItems });
    }

    render() {
        const { globalState } = this.context;
        const { selectedItems } = globalState;

        const folderTree = this.props.fileTreeMap.get(globalState.currentFolder);

        return folderTree.children.map((file, idx) => {
            if (file.isFolder) {
                return <Folder handleSelect={this.handleItemSelection} openHandler={this.props.setFolder}
                    file={file} key={idx}
                    selected={selectedItems.includes(file.id) ? true : false} />
            } else {
                return <File handleSelect={this.handleItemSelection}
                    file={file} key={idx}
                    selected={selectedItems.includes(file.id) ? true : false} />
            }
        });
    }
}