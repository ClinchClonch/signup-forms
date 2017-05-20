import React, { Component } from "react";
import PropTypes from "prop-types";

export class FormHeader extends Component {
    render() {
        const headerStyles = {
            height: 50,
            backgroundColor: "#1874CD",
            boxShadow: "0px 5px 4px #BDBDBD"
        }

        const ulStyles = {
            height: "100%",
            display: "flex",
            padding: 0
        }

        const liStyles = {
            width: "33.333%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FAFAFA",
            fontSize: 18,
            fontWeight: "bold"
        }

        return (
            <div className="form-header" style={headerStyles}>
                <ul style={ulStyles}>
                    {this.props.headerTexts.map((item) => {
                        return <li key={item.id} style={liStyles}>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
};

FormHeader.propTypes = {
    headerTexts: PropTypes.array
};
