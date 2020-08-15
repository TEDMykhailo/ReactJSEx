import React, {Component} from "react";

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
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder='type here...'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button> Add </button>
            </form>
        )
    }
}
