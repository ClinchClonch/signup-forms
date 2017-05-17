import React from "react"

export const FormHeader = (props) => {
    return (
        <div className="form-header">
            <ul>
                {props.headerTexts.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}