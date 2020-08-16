import React, {Component} from "react";

import AppHeader from "../app-header";
import ListItem from "../list-item";
import AddItemPanel from "../add-item-panel";
import Pagination from "../Pagination/"

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

    pagesNumber = () => {
        let countPages = [];

        for (let i = 1; i <= Math.ceil(this.state.data.length / this.state.desiredPage); i++) {
            countPages.push(i);
        }

        return countPages;
    }

    paginateItemValue = () => {
        const indexOfLastValue = this.state.currentPage * this.state.desiredPage;
        const indexOfFirstValue = indexOfLastValue - this.state.desiredPage;
        const currentValue = this.rev().slice(indexOfFirstValue, indexOfLastValue);

        console.log(currentValue)

        return currentValue.map((value) => {
            return value;
        });
    }

    changePages = (id) => {
        let is = id ? id : 1
        this.setState({
            currentPage: Number(is),
        });
    }

    state = {
        data: this.createRandomData(),
        currentPage: 1,
        desiredPage: 10,
        color: 'btn-secondary'
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

    doubleClickItem = (id) => {
        this.setState(({data}) => {
            let a = data.map((el) => {
                if(el.id === id) {
                    el.state = !el.state;
                }
                return el
            });

            localStorage.setItem('value', JSON.stringify(a));

            return {
                data: a
            }
        })
    }

    changeItem = (id, value) => {
        this.setState(({data}) => {
            let a = data.map((el) => {
                if(el.id === id) {
                    el.label = value;
                    el.state = !el.state;
                }
                return el
            });

            localStorage.setItem('value', JSON.stringify(a));

            return {
                data: a
            }
        })
    }


    render() {
        return (
            <div className="container">
                <AppHeader/>
                <AddItemPanel
                    addItem={this.addItemValue}
                />
                <ListItem
                    items={this.paginateItemValue()}
                    onDeleted={this.deleteItem}
                    doDoubleClickItem={this.doubleClickItem}
                    doChangeItem={this.changeItem}
                />
                <Pagination
                    value={this.state.currentPage}
                    valueColor={this.state.color}
                    countPages={this.pagesNumber()}
                    onChangePages={this.changePages}
                />
            </div>
        )
    }
}
