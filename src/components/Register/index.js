import React,{useState} from 'react';
import {Link} from "react-router-dom"

const Register = ()=>{

    const [user,setUser] =useState({email:"",password:""})
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log(user)
    const handleChange = (e) => { 
        const {name, value} = e.target;
        setUser(prevState => {
          return {
            ...prevState,
            [name]: value
          }
        });
      };
      
      const handleSubmit = (id,e) => { 
        e.preventDefault();
        //validac
        setError("")
        if (user.email.length < 2) {
            setError("Login musi być dluższy niż 1 znak");
            return;
        } 

        if (user.password.length < 5) {
            setError('password musi być dluższy niż 4 znaki');
            return;
        }

       
        fetch(`http://localhost:4000/users`,{
          method: "POST",
          body: JSON.stringify({...user,id}),
          headers: {
            "Content-Type": "application/json"
          }}) 

           window.history.back();
          
           
          
    }
      
   
    if (isLoggedIn) {
      return (
          <>
              <p>Jestes zalogowany</p>
              <p>{user.email} {user.surname}</p>
          </>
      )
  }
    
    return(
      
    <form className="form" onSubmit={(e)=>{return handleSubmit(user.email,e)}}>
        <label>email</label>
        <input type="text" placeholder="email" name="email" value={user.email} onChange={handleChange}/>
        <label>password</label>
        <input type="text" placeholder="password" name="password" value={user.password} onChange={handleChange}/>
        <input type="submit" value="zarejestruj się"/>
        {error && <p style={{color:'white',backgroundColor:"red"}}>{error}</p>}
        <Link to="/">wróć do strony głównej</Link>

    </form>
    )
}


export default Register ;
































// import React,{useState, useEffect} from 'react';
// import {Link} from "react-router-dom"

// const Register = ()=>{

//     const [user,setUser] =useState({name:"",email:""})
//     const [error, setError] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     console.log(user)
//     const handleChange = (e) => { 
//         const {name, value} = e.target;
//         setUser(prevState => {
//           return {
//             ...prevState,
//             [name]: value
//           }
//         });
//       };
      
//       const handleSubmit = (id,e) => { 
//         e.preventDefault();
//         //validac
//         setError("")
//         if (user.name.length < 2) {
//             setError("Login musi być dluższy niż 1 znak");
//             return;
//         } 

//         if (user.email.length < 5) {
//             setError('email musi być dluższy niż 4 znaki');
//             return;
//         }

       
//         fetch(`http://localhost:4000/users`,{
//           method: "POST",
//           body: JSON.stringify({...user,id}),
//           headers: {
//             "Content-Type": "application/json"
//           }}) 

//            window.history.back();
          
           
          
//     }
      
   
//     if (isLoggedIn) {
//       return (
//           <>
//               <p>Jestes zalogowany</p>
//               <p>{user.name} {user.surname}</p>
//           </>
//       )
//   }
    
//     return(
      
//     <form className="form" onSubmit={(e)=>{return handleSubmit(user.email,e)}}>
//         <label>Imię</label>
//         <input type="text" placeholder="imię" name="name" value={user.name} onChange={handleChange}/>
//         <label>email</label>
//         <input type="text" placeholder="email" name="email" value={user.email} onChange={handleChange}/>
//         <input type="submit" value="zarejestruj się"/>
//         {error && <p style={{color:'white',backgroundColor:"red"}}>{error}</p>}
//     </form>
//     )
// }


// export default Register ;
