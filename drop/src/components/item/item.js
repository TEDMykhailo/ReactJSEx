import React, {Component} from "react";
import item from "./item.css"

export default class Item extends Component {
    render() {
        const {label, onDeleted} = this.props;

        return (
            <div>
                <span>{label}</span>
                <button onClick={onDeleted}>delete</button>
            </div>)
    }
}
