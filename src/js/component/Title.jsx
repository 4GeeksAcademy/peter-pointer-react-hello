import React, { useState } from "react";


export const Title = (props) => {

    return (
        <h1 className={`text-center text-${props.color} my-2`}>{props.text}</h1>	
    )
}