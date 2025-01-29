import React from "react";

export const BtnCallToAction = () => {

    const action = {
        text: "Regístrate",
        background: "primary"
    }

    return (
        <button className={`btn btn-${action.background} px-5`} type="button">
            {action.text}
        </button>
    )
}