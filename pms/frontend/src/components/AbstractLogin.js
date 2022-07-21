import React from 'react';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AbstractUser from '../models/AbstractUser';
import { useNavigate } from "react-router-dom";

const AbstractLogin = () => {

    const [abstractUser, setAbstractUser] = useState(new AbstractUser());
    const [credentials, setCredentials] = useState('');
    console.log(abstractUser);
    const handleAbstractUser = (event) => {
        //console.log(event.target.name);
        //console.log(event.target.value);
        setAbstractUser({
            ...abstractUser,
            [event.target.name]: event.target.value
        });
    };
    const navigate = useNavigate();

    const submitAbstractUser = (event) => {
        axios.post('http://localhost:9084/authenticate', abstractUser)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('isUserLoggedIn', true);
                alert('Success');
                navigate('/springpensioner');
                //window.location.assign('/springpensioner');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                alert("Invalid credentials");
                console.log(error.response);
                setCredentials("Enter proper credentials.");
                
                window.location.assign('/loginabs');
            });
        event.preventDefault();
    }
    return (
        
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className='card'>
                    <div>
                        <h1 className="card-header" style={{ textAlign: 'center' }}  >Login</h1>
                    </div>

                    <div class="card-body">
                        <form className="input-group form-group" onSubmit={submitAbstractUser}>
                        <div className='form-group'>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                placeholder="Enter username"
                                value={abstractUser.username}
                                onChange={handleAbstractUser}
                                autoFocus
                                required
                            />
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={abstractUser.password}
                                onChange={handleAbstractUser}
                                required
                            />
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className=" float-right btn btn-success btn-outline-white"
                                value="Login"
                                onClick={submitAbstractUser}
                            />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AbstractLogin;