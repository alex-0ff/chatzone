import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Login() {
    const history = useHistory();
    
    if(localStorage.getItem("jwt") && localStorage.getItem("user_info")) history.push('/home');

    const [users, setUsers] = useState({ //Crée le state (fonction) setUsers et les objets à l'intérieur s'appel users
        email: '',
        password: ''
    });

    const [error, setError] = useState(false);
    const [response, setResponse] = useState("");

    const data = {   //on récup les éléments du users
        email: users.email,
        password: users.password
    };

    const handleSubmit = async e => { //on envoie le formulaire et on fait tout ce qu'il faut dedans (créer une fonction pour simplifier tout)
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch("http://boteric.fr:3000/api/v1/login", requestOptions)
        .then(response => response.json())
        .then(response => {
            if(response.error){
                setError(true)
                setResponse(response.error)
            } else {
            let jwt = response.result.jwt;
            let user_info = response.result.user_info;

            localStorage.setItem("jwt", jwt)
            localStorage.setItem("user_info", JSON.stringify(user_info))
            history.push('/')
            }
        })
    };

    const onChange = (e) => { //on récup chaque changement des inputs
        e.persist();
        debugger;
        setUsers({ ...users, [e.target.name]: e.target.value }); //à chaque changement des inputs dans le formulaires ont changes les données du setUsers
    }

    return (
        <div className="html">
                <Helmet>
                    <title>ChatZone - Signin</title>
                    <meta name="description" content="Connect to ChatZone"/>
                </Helmet>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" method="POST">
                        <h2>Tu as déjà un compte ?</h2>
                        <div className="login_error">{error ? response : ""}</div>
                        <div className="inputstyle">
                            <label>Email :</label>
                            <input type="email" name="email" autoComplete="email" value={users.email} onChange={onChange} id="email" />
                        </div>
                        <div className="inputstyle">
                            <label>Mot de passe :</label>
                            <input type="password" name="password" autoComplete="current-password" value={users.password} onChange={onChange} id="password" />
                        </div>
                        <button type="submit" onClick={handleSubmit} >Se connecter</button>
                        <a className="change_form" href="/register">Pas encore enregistré ?</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
