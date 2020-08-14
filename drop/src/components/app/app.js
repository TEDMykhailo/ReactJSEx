import React, {Component} from "react";

import AppHeader from "../app-header";
import ListItem from "../list-item";
import AddItemPanel from "../add-item-panel/add-item-panel";


export default class App extends Component {
    count = 0;

    createTodoItem = (text) => {
        return {
            label: text,
            state: false,
            id: this.count++
        }
    }

    makeRandomString = () => {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    createRandomData = () => {
        let data = [];

        for (let a = 0; a <= 99; a++) {
            data.push(this.createTodoItem(this.makeRandomString()));
        }

        if (window.localStorage.length > 0) {
            data = JSON.parse(localStorage.getItem('value'));
            this.count = data[data.length -1].id + 1;
        } else {
            localStorage.setItem('value', JSON.stringify(data));
        }

        return data;
    }

    state = {
        data: this.createRandomData()
    };

    rev = () => {
        let b = []
        for (let a = this.state.data.length - 1; a >= 0; a--){
            b.push(this.state.data[a])
        }
        return b
    }

    addItemValue = (value) => {
        this.setState(() => {
            const newArr = [...this.state.data,
                this.createTodoItem(value)];

            localStorage.setItem('value', JSON.stringify(newArr));

            this.count = newArr[newArr.length -1].id + 1;

            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const inx = data.findIndex((el) => el.id === id)

            const before = data.slice(0, inx)
            const after = data.slice(inx + 1)

            const newArr = [...before, ...after]

            localStorage.setItem('value', JSON.stringify(newArr));

            this.count = data[data.length -1].id + 1;

            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div>
                <AppHeader/>
                <AddItemPanel
                    addItem={this.addItemValue}
                />
                <ListItem
                    todos={this.rev()}
                    onDeleted={this.deleteItem}
                />
            </div>
        )
    }
}
