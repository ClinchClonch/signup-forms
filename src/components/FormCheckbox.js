import React from "react"

export const FormCheckbox = (props) => {
    return (
        <div>
            <label className="form-checkbox-text">{props.checkBoxText}</label>
            <input className="form-checkbox" type="checkbox" value="None" />
        </div>
    )
}