import React, {Component} from "react";
import pagination from "./Pagination.css"

export default class Pagination extends Component {
    render() {
        const {value, valueColor, countPages, onChangePages} = this.props;
        let className = 'btn';
        const color = (val, item) => val === item ? className + ' ' + valueColor : className + ' ' + 'btn-light';

        const el = countPages.map((item) => {
            return <button
                className= {color(value, item)}
                key={item}
                id={item}
                onClick={() => onChangePages(item)}>{item}</button>
        })

        return (
            <div className='row'>
                <div className="offset-sm-2 col-sm-8">
                    {el}
                </div>
            </div>
        );
    }
}
