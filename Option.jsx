import React from "react";

export const Option = ({ id, answer, name }) => {
    return (
        <li className="variant-wrapper">
            <input
                required
                type="radio"
                name={name}
                id={`variant-${id}`}
            />
            <label htmlFor={`variant-${id}`}>{answer}</label>
        </li>
    );
};
