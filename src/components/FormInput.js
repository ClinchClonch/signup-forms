import React, { Component } from "react";

export class FormInput extends Component {
    render() {
        const formStyles = {
            position: "relative",
            top: 20,
            paddingBottom: 20
        }

        const formLabelStyles = {
            fontSize: 12
        }

        const formInputFieldStyles = {
            // outline: "none"
        }

        const formInputStyles = {
            width: "90%",
            fontSize: 20
        }

        return (
            <div className="form-input" style={formStyles}>
                <label style={formLabelStyles}>{this.props.labelText}</label>
                <form style={formInputFieldStyles} onSubmit={this.props.handleSubmit}>
                    <input type="text"
                        style={formInputStyles}
                        onChange={this.props.handleInputChange}
                        placeholder={this.props.placeholder}
                    />
                </form>
            </div>
        )
    }
}