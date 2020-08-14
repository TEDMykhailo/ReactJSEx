import React, { Component} from "react";
import pagination from "./Pagination.css"

export default class Pagination extends Component {
    render() {
        const {value, valueColor, countPages, onChangePages} = this.props;
        const color = (val, item) => val === item ? valueColor : '';

        const el = countPages.map((item) => {
            return <button
                className= {color(value, item)}
                key={item}
                id={item}
                onClick={() => onChangePages(item)}>{item}</button>
        })

        return (
            <div>
                {el}
            </div>
        );
    }
}
