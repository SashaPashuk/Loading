import React, {useState} from "react";
import "./login.css"

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import validator from 'validator'

import {users} from "./data";

const validatePhoneNumber = (number) => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
}

const Login = ({loginHandler}) =>{
    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);

    const [pass, setPass] = useState("");
    const [passErr, setErrPass] = useState(false);  

    const [open, setOpen] = useState(false);

    const handlerLogin = (e) => {
        e.preventDefault();
        users.map((user) =>{
            if(`+380${mobile}` === user.number && pass === user.pass){
                console.log("incorect")
                loginHandler(false)
            }
            setOpen(true);
            return user
        })
    }

    return(
        <div className="card login-card mt-2 container">
            <form>
                <div className="form-group text-left">
                    <TextField
                        type="tel"
                        error={isError}
                        value={mobile}
                        className="line"
                        label="Enter Phone Number"
                        onChange={(e) => {
                        setmobile(e.target.value);
                        if (e.target.value.length === 0){
            
                            setIsError(false);
                        }
                        if (e.target.value.length > 9 || validatePhoneNumber(e.target.value) === false) {
                                console.log(validatePhoneNumber(e.target.value));
                                setIsError(true);
                            }
                        }}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">
                            +380
                            </InputAdornment>,
                        }}
                    />
                </div>
                <div className="form-group text-left pass">
                    <TextField
                        type="password"
                        error={passErr}
                        value={pass}
                        label="Enter password"
                        className="line"
                        onChange={(e) => {
                            setPass(e.target.value);
                            if(e.target.value.length < 6){
                                setErrPass(true);
                            }
                        }}
                    />
                </div>
                <Button margin={5} variant="outlined" onClick={handlerLogin}>
                    Login
                </Button>
                <Snackbar open={open} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    Sorry, your pass or number incorrect
                </Alert>
                </Snackbar>
            </form>
        </div>
    )
}

export default Login;