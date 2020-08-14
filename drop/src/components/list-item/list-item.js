import React, { Component} from "react";

import Item from '../item/item'

export default class ListItem extends Component {
    render() {
        const { todos, onDeleted,} = this.props

        const el = todos.map((item) => {
            return <li key={item.id}>
                <Item
                    {...item}
                    onDeleted={() => onDeleted(item.id)}
                />
                </li>
        })

        return (
            <ul>
                {el}
            </ul>
        );
    }
}
