import React, { Component } from "react";

export class FormCheckbox extends Component {
    render() {
        const textStyles = {
            fontSize: 14
        }

        return (
            <div className="form-checkbox">
                <label style={textStyles}>{this.props.checkBoxText}</label>
                <input type="checkbox"
                    onChange={this.props.handleCheckboxChange}
                    checked={this.props.checked} />
            </div>
        )
    }
}