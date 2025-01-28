import React, { use, useEffect, useState } from "react";
import { Title } from "./Title.jsx";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";

export const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [start, setStart] = useState("Start");
    const [icon, setIcon] = useState("clock");
    const [subtitle, setSubtitle] = useState({ text: "Clock", color: "primary" })

    const handleStart = () => {
        setIsRunning(!isRunning);
        setIcon("<FontAwesomeIcon icon={faStopwatch}/>")
        setSubtitle({ text: "Chronometer", color: "warning" });
        // opción 1
        if (isRunning) {
            counter == 0 ? setStart("Start") : setStart("Continue");
        } else {
            setStart("Pause")

        }

        // opción 2 
        // setStart("Pause");
    }

    const handleReset = () => {
        setSubtitle({ text: "Clock", color: "primary" });
        setStart("Start");
        setIcon("clock");
        setCounter(0);
        setIsRunning(false);
    }

    // useEffect(funcionSetup, array de dependencias)
    useEffect(() => {
        if (isRunning) {
            const newInterval = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 10);

            return () => clearInterval(newInterval);
        }
    }, [isRunning])

    return (
        <div className="container">
            <Title text="Simple Counter" color="success" />
            <h2 className={`text-${subtitle.color}`}>{subtitle.text}</h2>
            <div className="big-counter">
                <div><FontAwesomeIcon icon={faClock}/></div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>,</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter % 10)}</div>
                <div>
                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <button onClick={handleStart} type="button" className="btn btn-outline-success">{start}</button>
                        <button onClick={handleReset} type="button" className="btn btn-outline-danger">{"Reset"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}