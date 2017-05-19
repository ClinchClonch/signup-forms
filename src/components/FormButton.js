import React, { Component } from "react";

export class FormButton extends Component {
    render() {
        const buttonStyles = {
            fontSize: 16,
            lineHeight: "30px",
            width: 70,
            boxShadow: "0px 1px 3px #91918b"
        }

        return (
            <button type="button"
                disabled={this.props.disabled}
                onClick={this.props.handleClick}
                className="form-button"
                style={buttonStyles}>
                {this.props.buttonText}
            </button>
        )
    }
}
