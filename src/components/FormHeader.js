import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormHeaderItem } from "./";

export class FormHeader extends Component {
    render() {
        const headerStyles = {
            height: 50,
            backgroundColor: "#1874CD",
            boxShadow: "0px 5px 4px #BDBDBD"
        };

        const ulStyles = {
            height: "100%",
            display: "flex",
            padding: 0
        };

        return (
            <div className="form-header" style={headerStyles}>
                <ul style={ulStyles}>
                    <FormHeaderItem
                        text={this.props.headerTexts.first}
                        style={this.props.style.first}>
                    </FormHeaderItem>
                    <FormHeaderItem
                        text={this.props.headerTexts.second}
                        style={this.props.style.second}>
                    </FormHeaderItem>
                    <FormHeaderItem
                        text={this.props.headerTexts.third}
                        style={this.props.style.third}>
                    </FormHeaderItem>
                </ul>
            </div>
        )
    }
}

FormHeader.propTypes = {
    headerTexts: PropTypes.object,
    style: PropTypes.object
};
