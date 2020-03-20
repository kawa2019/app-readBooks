import React,{useState,} from "react";
import {Link} from "react-router-dom"

const Login =()=>{


        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [email1, setEmail1] = useState('');
        const [password1, setPassword1] = useState('');
        const [error, setError] = useState('');
        const [user, setUser] = useState({});
        console.log(user.accessToken)
        
        const handleSubmit = e => {
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
            //wysylam zapytanie do servera
            
        fetch(`http://localhost:4000/signin`,{
            method: "POST",
            body: JSON.stringify({email:email1,password:password1}),
            headers: {
              "Content-Type": "application/json"
            }}) 
            .then((user)=>user.json())
            .then(user => {
                // pod zmienną user mamy dostęp do informacji o zalogowanym użytkowniku
                setIsLoggedIn(true);
                setUser(user);
                
                
                window.history.back();
            }).catch(err => {
                // pod zmienną err mamy dostęp do informacji o błędzie
                setIsLoggedIn(false);
                setError('dane nieprawidłowe');
                
            })
            // fetch(`http://localhost:4000/users/`,{
            //       method:"POST",
            // headers: {
            //     "Authorization": `Bearer ${user.accessToken}`
                
            // }}).then(res=>{return console.log(res.json()) ; }
            // )
          
        }
         

      return (
            <form onSubmit={handleSubmit} >
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
            </form>)
}


export default Login;   