import React, {Component} from "react";
import addItemPanel from "./add-item-panel.css"

export default class AddItemPanel extends Component {
    state= {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
                label: event.target.value
            }
        )
    }

    onSubmit = (event) => {
        event.preventDefault();

        if(this.state.label.length !== 0) {
            this.props.addItem(this.state.label);
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form
                className="row m15"
                onSubmit={this.onSubmit}>
                <input
                    className="form-control col-sm-10"
                    type="text"
                    placeholder='type here...'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button className="btn btn-light offset-sm-1 col-sm-1"> Add </button>
            </form>
        )
    }
}
