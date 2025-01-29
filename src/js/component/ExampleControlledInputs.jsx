import { faEye, faEyeSlash, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useState } from "react";

export const ExampleControlledInputs = () => {

    const [email, setEmail] = useState("test@email.com");
    const [password, setPassword] = useState("");
    const [checkMe, setCheckMe] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    // opción 1
    //const handleEmail = (event) => { setEmail(event.target.value) }
    // opción 2
    const handleEmail = event => setEmail(event.target.value)

    const handlePassword = event => setPassword(event.target.value)

    const handleCheckMe = (event) => { setCheckMe(event.target.checked) }

    const handleViewPassword = () => {
        setViewPassword(!viewPassword)
    }

    const handleSubmit = (event) => {
        event.preventDefault();  // siempre si o si, la primera instruccion de mi event submit (regla de oro)
        // Opción 1
      /*   const dataTosend = {
            email: email,
            password: password,
            accept: checkMe
        } */
        // Opción 2
       const dataTosend = {email, password, checkMe}
        console.log(dataTosend)
        // logica del formulario
        // validar datos
        // enviar esos datos a algun lado
        // me voy a otra vista
    }

    return (
        <div className="container">
            <h1 className="text-center">Controlled Inputs</h1>
            <div className="row text-start">
                <div className="col-10 col-md-6 col-lg-4 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <div className="input-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={email} onChange={handleEmail} />
                                <div className="input-group-text">
                                    <i className="fa fa-user"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <div className="input-group">
                                <input type={viewPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword} />
                                <div className="input-group-text" onClick={handleViewPassword}>
                                    {viewPassword ? 
                                    <i className="fa fa-eye"></i>
                                    :
                                    <i className="fa fa-eye-slash text-danger"></i>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                checked={checkMe} onChange={handleCheckMe} />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mx-2">Submit</button>
                            <button type="reset" className="btn btn-secondary mx-2">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}