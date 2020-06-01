import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Login = ({ url,optionsToLogReg }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [loggedUser, setLoggedUser] = useState({});
    const [userToLog, setUserToLog] = useState({});
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');
    const dataToLog = { email: email1, password: password1 };
    const optionsToGetLogId = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${userToLog.accessToken}`
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //validacja
        if (email1.length < 2) {
            setError('Login musi być dluższy niż 1 znak');
            return;
        }
        if (password1.length < 5) {
            setError('Password1 musi być dluższy niż 4 znaki');
            return;
        }
        setError('');
        fetch(`${url.http}signin`, optionsToLogReg(dataToLog)
        )
            .then((userToLog1) => userToLog1.json())
            .then(userToLog1 => {
                setIsLoggedIn(true);
                setUserToLog(userToLog1)
            })
            .catch(err => {
                setIsLoggedIn(false);
                setError('dane nieprawidłowe');
                console.log(err)
            });
    }

    useEffect(() => {
        fetch(`${url.http}600/users/${email1}`, optionsToGetLogId
        ).then(res => res.json()
        ).then(res => setLoggedUser(res))
    }, [userToLog])


    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                {error && <p>{error}</p>}
                <label>email1</label>
                <input
                    value={email1}
                    type="text"
                    onChange={e => setEmail1(e.target.value)}
                />
                <label>password1</label>
                <input
                    value={password1}
                    type="text"
                    onChange={e => setPassword1(e.target.value)}
                />
                <input type="submit" value="Wyslij" />
                <Link to="/">wróć do strony głównej</Link>
            </form>
            <h1>Twoja poczta{loggedUser.email}</h1>
        </div>
    )
}
export default Login;   