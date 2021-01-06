import React, { useState } from "react";
// import React from "react";

const FormComp = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const handleFName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        }
    }

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const handleLName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        }
    }

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 0) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        }
    }

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
    }


    const [cPassword, setCPassword] = useState("");
    const [cPasswordError, setCPasswordError] = useState("");

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        if(e.target.value.length < 1) {
            setCPasswordError("Confrim Password is required!");
        } else if(e.target.value.length < 8) {
            setCPasswordError("Confrim Password must be 8 characters or longer!");
        }
    }



        return(
            <div className="styles">
                <form onSubmit={ (e) => e.preventDefault() }>
                    <div>
                        <label>First Name: </label> 
                        <input name="firstName" type="text" onChange={handleFName} />
                            {
                                firstNameError ?
                                <p style={{color:'red'}}>{ firstNameError }</p> :
                                ''
                            }
                    </div>
                    <div>
                        <label>Last Name: </label> 
                        <input name="lastName" type="text" onChange={handleLName} />
                        {
                                lastNameError ?
                                <p style={{color:'red'}}>{ lastNameError }</p> :
                                ''
                            }
                    </div>
                    <div>
                        <label>Email Address: </label> 
                        <input name="email" type="text" onChange={handleEmail} />
                        {
                                emailError ?
                                <p style={{color:'red'}}>{ emailError }</p> :
                                ''
                            }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input name="password" type="password" onChange={handlePassword} />
                        {
                                passwordError ?
                                <p style={{color:'red'}}>{ passwordError }</p> :
                                ''
                            }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input name="cPassword" type="password" onChange={handleCPassword} />
                        {
                                cPasswordError ?
                                <p style={{color:'red'}}>{ cPasswordError }</p> :
                                ''
                            }
                    </div> 
                </form>
            </div>
        );
    }

    export default FormComp;