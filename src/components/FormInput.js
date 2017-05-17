import React from "react"

export const FormInput = (props) => {
    return (
        <div>
            <label className="form-input-label">{props.labelText}</label>
            <form className="form-input-field" onSubmit={props.handleSubmit}>
                <input type="text"
                    onChange={props.handleInputChange}
                    placeholder={props.placeholder} />
            </form>
        </div>
    )
}
