import React, { Component } from "react";
import PropTypes from "prop-types";

export class FormInput extends Component {
    render() {
        const formLabelStyles = {
            fontSize: 14,
            fontFamily: "Calibri"
        };

        const formInputStyles = {
            width: "100%",
            fontSize: 18,
            border: "none",
            outline: "none",
            paddingTop: 10,
            borderBottom: "solid #E0E0E0",
            borderBottomWidth: 2,
            backgroundColor: "#EEEEEE",
            color: "grey"
        };

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
        );
    }
}

FormInput.propTypes = {
    labelText: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired
};
