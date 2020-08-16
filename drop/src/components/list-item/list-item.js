import React, {Component} from "react";

import Item from '../item/item'

export default class ListItem extends Component {
    render() {
        const {items, onDeleted, doDoubleClickItem, doChangeItem} = this.props

        const el = items.map((item) => {
            return <div key={item.id}>
                <Item
                {...item}
                onDeleted={() => onDeleted(item.id)}
                doDoubleClick={() => doDoubleClickItem(item.id)}
                doChangeItem={doChangeItem}
                idValue={item.id}
                />
            </div>
        })

        return (
            <div>
                {el}
            </div>
        );
    }
}
