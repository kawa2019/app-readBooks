import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"

const Login =()=>{

        
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [email1, setEmail1] = useState('');
        const [password1, setPassword1] = useState('');
        const [error, setError] = useState('');
        const [user, setUser] = useState({});
        const [loggedUser,setLoggedUser] = useState({})
        console.log(loggedUser)
        
        
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
            //wysylam zapytanie do servera
            
        fetch(`http://localhost:4000/signin`,{
            method: "POST",
            body: JSON.stringify({email:email1,password:password1}),
            headers: {
              "Content-Type": "application/json"
            }}) 
            .then((user1)=>user1.json())
            .then(user1 => { 
                // pod zmienną user mamy dostęp do informacji o zalogowanym użytkowniku
                setIsLoggedIn(true);
                setUser(user1);
                console.log("POST TUTAJ")
                
                   
            }).catch(err => {
                // pod zmienną err mamy dostęp do informacji o błędzie
                setIsLoggedIn(false);
                setError('dane nieprawidłowe');
                console.log("Nie działa")
                
            }) ;
            
           
            
            console.log(user.accessToken)
        }   

    
     

        useEffect(()=>{
            fetch(`http://localhost:4000/600/users/${email1}`,{
                method:"GET",
          headers: {
              "Authorization": `Bearer ${user.accessToken}`                
          }}).then(res=>{return res.json()}
          ).then(res=>{setLoggedUser(res)}) 
          
        },[user])
       
       
      return (
           <>
            <form  className="form" onSubmit={handleSubmit} >
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
            </>)
}


export default Login;   