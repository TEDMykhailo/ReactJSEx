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
                    <div className="row">
                        <div
                            onDoubleClick={doDoubleClick}
                            className="alert
                                    alert-secondary
                                    col-sm-10
                                    clip"
                            >{label}</div>
                        <button onClick={onDeleted}
                                className="btn
                                btn-outline-danger
                                offset-sm-1
                                col-sm-1
                                btnDelete">
                            delete
                        </button>
                    </div>
                )}
                {state && (
                    <form
                        className="row"
                        onSubmit={this.onSubmit}>
                        <input
                            className="form-control
                            form-control-lg
                            col-sm-10
                            m15"
                            type="text"
                            onBlur={this.onFocusChange}
                            onChange={this.onLabelChange}
                            value={this.state.label}
                            autoFocus
                        />
                        <button className="btn
                                btn-light
                                offset-sm-1
                                col-sm-1
                                m15
                                btnDelete"
                                type="submit"
                                onSubmit={this.onSubmit}>Change
                        </button>
                    </form>
                )}
            </div>)
    }
}
