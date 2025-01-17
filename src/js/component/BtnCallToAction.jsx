import React from "react";

export const BtnCallToAction = () => {

    const action = {
        text: "Registrate",
        background: "warning"
    }

    return (
        <button className={`btn btn-${action.background} px-5 mb-5`} type="button">
            {action.text}
        </button>
    )
}