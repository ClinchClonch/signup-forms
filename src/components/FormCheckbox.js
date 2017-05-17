import React from "react"

export const FormCheckbox = (props) => {
    return (
        <div>
            <label className="form-checkbox-text">{props.checkBoxText}</label>
            <input type="checkbox"
                className="form-checkbox"
                onChange={props.handleCheckboxChange}
                checked={props.checked} />
        </div>
    )
}