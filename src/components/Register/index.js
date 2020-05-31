import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Register = ({ url, userReg, setUserReg, optionsToLogReg }) => {

  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserReg(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };

  const handleSubmit = (id, e) => {
    e.preventDefault();
    //validac
    setError("")
    if (userReg.email.length < 2) {
      setError("Login musi być dluższy niż 1 znak");
      return;
    }

    if (userReg.password.length < 5) {
      setError('password musi być dluższy niż 4 znaki');
      return;
    }

    fetch(`${url.http}users`, optionsToLogReg({ ...userReg, id }))
    window.history.back();
  }

  if (isLoggedIn) {
    return (
      <>
        <p>Jestes zalogowany</p>
        <p>{userReg.email} {userReg.surname}</p>
      </>
    )
  }

  return (

    <form className="form" onSubmit={(e) => { return handleSubmit(userReg.email, e) }}>
      <label>email</label>
      <input type="text" placeholder="email" name="email" value={userReg.email} onChange={handleChange} />
      <label>password</label>
      <input type="text" placeholder="password" name="password" value={userReg.password} onChange={handleChange} />
      <input type="submit" value="zarejestruj się" />
      {error && <p style={{ color: 'white', backgroundColor: "red" }}>{error}</p>}
      <Link to="/">wróć do strony głównej</Link>

    </form>
  )
}
export default Register;