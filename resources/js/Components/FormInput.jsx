import React from "react";
import InputLabel from "./InputLabel";

export default function FormInput({
    id,
    label,
    name,
    value,
    onChange,
    type = "text",
    className = "",
}) {
    return (
        <div className="mb-4">
            <InputLabel htmlFor={id} value={label} />
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={`w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg ${className}`}
            />
        </div>
    );
}
