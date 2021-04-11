import React, { useState } from "react";
import "../Style/login.css";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";

function Register() {
  
  const [users, setUsers] = useState({
    //Crée le state (fonction) setUsers et les objets à l'intérieur s'appel users
    email: "",
    username: "",
    password: "",
    password2: "",
    birthday: "",
  });

  const history = useHistory();

  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");
  const max_birthday = dayjs().subtract(13, "years").format("YYYY-MM-DD");
  const min_birthday = dayjs().subtract(120, "years").format("YYYY-MM-DD");

  const data = {
    //on récup les éléments du users
    email: users.email,
    username: users.username,
    password: users.password,
    password2: users.password2,
    birthday: users.birthday,
  };

  const handleSubmit = async (e) => {
    //on envoie le formulaire et on fait tout ce qu'il faut dedans (créer une fonction pour simplifier tout)
    e.preventDefault();

    if (users.password !== users.password2) {
      setResponse("Les mots de passes sont différents");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let request = await fetch("http://boteric.tk:3000/api/v1/register", requestOptions);
    let res = await request.json();

    console.log(res)

    if (res.result === "success") return history.push("/login")
    setError(true);
    setResponse(res.error);
  }

  const onChange = (e) => {
    //on récup chaque changement des inputs
    e.persist();
    debugger;
    setUsers({ ...users, [e.target.name]: e.target.value }); //à chaque changement des inputs dans le formulaires ont changes les données du setUsers
  };
  
  if(localStorage.getItem("jwt")) history.push('/home');

  return (
    <div className="html">
      <div className="login">
        <div className="login-page">
          <div className="form">
            <form className="register-form" method="POST">
              <h2>Pas encore de compte ?</h2>
              <div className="login_error">{error ? response : ""}</div>
              <div className="inputstyle">
                <label>Email :</label>
                <input type="email" name="email" autoComplete="email" value={users.email} onChange={onChange} id="email" />
              </div>
              <div className="inputstyle">
                <label>Username :</label>
                <input type="text" name="username" autoComplete="username" value={users.nickname} onChange={onChange} id="username" />
              </div>
              <div className="inputstyle">
                <label>Mot de passe :</label>
                <input type="password" name="password" autoComplete="current-password" value={users.password} onChange={onChange} id="password" />
              </div>
              <div className="inputstyle">
                <label>Confirmer le mot de passe :</label>
                <input type="password" name="password2" autoComplete="new-password" value={users.password2} onChange={onChange} id="password2" />
              </div>
              <div className="inputstyle">
                <label>Date de naissance :</label>
                <input type="date" name="birthday" autoComplete="birthday" value={users.birthday} onChange={onChange} id="birthday" min={min_birthday} max={max_birthday} />
              </div>
              <button type="submit" onClick={handleSubmit} >Commence ton aventure</button>
              <a class="message" href="/login">Pas encore enregistré ?</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
