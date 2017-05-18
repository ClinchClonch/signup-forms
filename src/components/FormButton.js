import React, { Component } from "react";

export class FormButton extends Component {
    render() {
        const buttonStyles = {
            lineHeight: "20px",
            boxShadow: "0px 1px 3px #91918b"
        }

        return (
            <button type="button" className="form-button" style={buttonStyles}>{this.props.buttonText}</button>
        )
    }
}