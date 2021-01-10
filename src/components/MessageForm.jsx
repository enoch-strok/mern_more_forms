import React, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const {inputs, setInputs} = props;
    // const inputs = props.inputs;             //Alt way to to say the above line ^1
    // const setInputs = props.setInputs;       //Alt way to to say the above line ^2
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState("");


const createUser = e => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password, passwordCheck};
};

    const onChange = e => {
        // e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const onChange_firstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setFirstNameError("First Name must be at least 2 characters.");
        } else setFirstNameError("");
    };
    const onChange_lastName = (e) => {
        setlastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setlastNameError("Last Name must be at least 2 characters.");
        } else setlastNameError("");
    };
    const onChange_email = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0){
            setEmailError("Email must be at least 5 characters.");
        } else setEmailError("");
    };
    const onChange_password = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0){
            setPasswordError("Password must be at least 8 characters.");
        } else setPasswordError("");
    };
    const onChange_passwordCheck = (e) => {
        setPasswordCheck(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0){
            setPasswordCheckError("Password must be at least 8 characters.");
        } else if (e.target.value !== password) {     
            setPasswordCheckError("Confirmation Password does not match Password.");
        } else setPasswordCheckError("");
    };

    // const passwordCheck = (e) => {
    //     if (e.target.value === ""){
    //         setPasswordCheckError("");
    //     } else if (e.target.value !== inputs.password) {
    //         setPasswordCheckError("Passwords do not match!");
    //     } else setPasswordCheckError("");
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.inputs( inputs );
    // };
    
    return (
        <fieldset>
            {/* <form onSubmit={(e) => e.preventDefault()}> */} 
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={onChange_firstName} type="text" name="firstName"/>
                    {firstNameError ? <p style={{color: "red"}}>{firstNameError}</p> : ""}
                </div>
                <div className="form-group">  
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={onChange_lastName} type="text" name="lastName"/>
                    {lastNameError ? <p style={{color: "red"}}>{lastNameError}</p> : ""}
                </div>
                <div className="form-group">  
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange_email} type="text" name="email"/>
                    {emailError ? <p style={{color: "red"}}>{emailError}</p> : ""}
                </div>
                <div className="form-group">  
                    <label htmlFor="password">Password</label>
                    <input onChange={onChange_password} type="text" name="password"/>
                    {passwordError ? <p style={{color: "red"}}>{passwordError}</p> : ""}
                </div>
                <div className="form-group">  
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={onChange_passwordCheck} type="text" name="confirmPassword"/>
                    {passwordCheckError ? <p style={{color: "red"}}>{passwordCheckError}</p> : ""}
                </div>
            </form>
        </fieldset>
    );
};
    
export default MessageForm;