import React, { Component } from "react";

export class FormInput extends Component {
    render() {
        const formLabelStyles = {
            fontSize: 12
        }

        const formInputStyles = {
            width: "95%",
            fontSize: 20
        }

        return (
            <div className="form-input">
                <label style={formLabelStyles}>{this.props.labelText}</label>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text"
                        style={formInputStyles}
                        onChange={this.props.handleInputChange}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                    />
                </form>
            </div>
        )
    }
}
