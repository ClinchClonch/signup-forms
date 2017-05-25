import React, { Component } from "react";
import PropTypes from "prop-types";

export class FormHeaderItem extends Component {
    render() {
        const styles = {
            width: "33.333%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: this.props.style.color,
            borderBottom: this.props.style.borderBottom
        };

        return (
          <li style={styles}>{this.props.text}</li>
        );
    }
}

FormHeaderItem.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
};
