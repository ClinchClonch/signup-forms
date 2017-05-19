import React, { Component } from "react";

export class FormButton extends Component {
    render() {
        const buttonStyles = {
            fontSize: 16,
            color: "#424242",
            lineHeight: "32px",
            width: 80,
            backgroundColor: "#FAFAFA",
            boxShadow: "0px 2px 2px #BDBDBD"
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
