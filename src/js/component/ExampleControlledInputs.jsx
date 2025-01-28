import { faEye, faEyeSlash, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const ExampleControlledInputs = () => {

    const [ email, setEmail ] = useState("test@email.com");

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    return (
        <div className="container">
            <h1 className="text-center">Controlled Inputs</h1>
            <div className="row text-start">
                <div className="col-10 col-md-6 col-lg-4 m-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            value={email} onChange={handleEmail}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <div className="input-group-text">
                                    <FontAwesomeIcon icon={faEye} />
                                    <FontAwesomeIcon icon={faEyeSlash} className="text-danger" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mx-2">Submit</button>
                            <button type="submit" className="btn btn-secondary mx-2">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}