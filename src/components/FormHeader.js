import React, { Component } from "react";

export class FormHeader extends Component {
    render() {
        const headerStyles = {
            height: 50,
            backgroundColor: "#1874CD",
            boxShadow: "0px 5px 4px #91918b"
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
            color: "white",
            fontSize: 18
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
}
