import React, { Component } from "react";
import PropTypes from "prop-types";

export class FormCheckbox extends Component {
    render() {
        const textStyles = {
            fontSize: 16
        };

        return (
            <div className="form-checkbox">
                <label style={textStyles}>{this.props.checkBoxText}</label>
                <input type="checkbox"
                    onChange={this.props.handleCheckboxChange}
                    checked={this.props.checked} />
            </div>
        );
    }
}

FormCheckbox.propTypes = {
    checkBoxText: PropTypes.string,
    handleCheckboxChange: PropTypes.func,
    checked: PropTypes.bool
};
