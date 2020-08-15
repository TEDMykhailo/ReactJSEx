import React, { Component} from "react";

import Item from '../item/item'

export default class ListItem extends Component {
    render() {
        const { items, onDeleted, doDoubleClickItem, doChangeItem} = this.props

        const el = items.map((item) => {
            return <li key={item.id}>
                <Item
                    {...item}
                    onDeleted={() => onDeleted(item.id)}
                    doDoubleClick={() => doDoubleClickItem(item.id)}
                    doChangeItem={doChangeItem}
                    idValue={item.id}
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
