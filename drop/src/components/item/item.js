import React, {Component} from "react";
import item from "./item.css"
import ListItem from "../list-item";

export default class Item extends Component {
    state = {
        label: this.props.label
    }

    onLabelChange = (event) => {
        this.setState({
                label: event.target.value
            }
        )
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.state.label !== this.props.label) {
            this.props.doChangeItem(this.props.idValue, this.state.label);
        }
    }

    onFocusChange = () => {
        setTimeout(() => {
            if (this.props.state) {
                this.setState({
                    label: this.props.label
                });

                this.props.doDoubleClick();
            }
        }, 100)
    }

    render() {
        const {label, state, onDeleted, doDoubleClick, doChangeItem, idValue} = this.props;

        return (
            <div>
                {!state && (
                    <div>
                    <span
                        onDoubleClick={doDoubleClick}
                    >{label}</span>
                        <button onClick={onDeleted}>delete</button>
                    </div>
                )}
                {state && (
                    <form
                        onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            onBlur={this.onFocusChange}
                            onChange={this.onLabelChange}
                            value={this.state.label}
                            autoFocus
                        />
                        <button type="submit"
                                onSubmit={this.onSubmit}>change</button>
                    </form>
                )}
            </div>)
    }
}
