import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import rat from "../assets/test/rat.jpg";
import theme_blue from "../assets/Private/theme-blue.png";
import theme_dark from "../assets/Private/theme-dark.png";
import theme_white from "../assets/Private/theme-white.png";
//import placeholder from "../assets/test/rat.jpg";

function Settings() {

    let jwt = localStorage.getItem("jwt");
    let user_id = localStorage.getItem("user_id");

    const [error, setError] = useState(false);
    const [response, setResponse] = useState("");
    const [informations, setInformations] = useState({});

    const [{ alt, src }, setProfilePicture] = useState({
        src: "",
        alt: "Envoyer une image"
    });

    const [users, setUsers] = useState({
        //avatar: "",
        email: "",
        username: "",
        nickname: "",
        description: "",
        password: ""
    });

    const history = useHistory();

    const disconnect = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user_id");
        history.push('/login');
    }

    const delete_account = () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${jwt}`
            }

        };
        fetch("http://boteric.tk:3000/api/v1/users/" + user_id, requestOptions)
            .then((res) => {
                if (res.status === 204) {
                    localStorage.removeItem("jwt");
                    localStorage.removeItem("user_id");
                    history.push('/login');
                }
                else {
                    setError(true)
                    setResponse(res.result)
                    console.log(res.result)
                }
            })
    }

    useEffect(() => {
        let jwt = localStorage.getItem("jwt");
        let user_id = localStorage.getItem("user_id");

        if (jwt) {
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            };
            return fetch("http://boteric.tk:3000/api/v1/users/" + user_id, requestOptions)
                .then((res) => res.json())
                .then(res => {
                        let result = res.result[0];
                        setInformations(result);
                        setProfilePicture({ src: "http://boteric.tk/chatzone/profile/" + result.avatar });
                        setUsers({
                            email: result.email,
                            username: result.username,
                            nickname: result.nickname,
                            description: result.description
                        })
                })
        }
    }, [])

    //Upload profile picture
    const uploadProfilePicture = async (e) => {
        document.getElementById("input-preview-image").click();
    }

    const handleChange = async (e) => {
        if (e.target.files[0]) {
            setProfilePicture({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });

            let fileReader = new FileReader();
            let file = "";
            fileReader.onload = function (fileLoadedEvent) {
                file = fileLoadedEvent.target.result;

                const requestOptions = {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt}`
                    },
                    body: JSON.stringify({
                        avatar: file.toString()
                    }),
                };
                return fetch("http://boteric.tk:3000/api/v1/users/"+user_id, requestOptions)
                    .then((res) => res.json())
                /*.then((res) => {
          
                  if (res.result !== "success") {
                    setResponse(res.result)
                  } else {
                    setError(true);
                    setResponse(res.result);
                  }
                });
            
            /*setUsers({
                avatar: file
            })*/
            };
            // Convert data to base64
            fileReader.readAsDataURL(e.target.files[0]);
        }
    }


    const data = {
        //on récup les éléments du users
        email: users.email,
        username: users.username,
        nickname: users.nickname,
        password: users.password
    };

    const handleSubmit = async (e) => {
        //on envoie le formulaire et on fait tout ce qu'il faut dedans (créer une fonction pour simplifier tout)
        e.preventDefault();

        if (users.password.length < 1 || users.description.length < 1 || users.email.length < 1 || users.nickname.length < 1 || users.username.length < 1) {

            setError(true);
            setResponse("Alors, on modifie le code HTML ?")
        }

        const requestOptions = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(data),
        };
        console.log(data)
        console.log(requestOptions)
        fetch("http://boteric.tk:3000/api/v1/users/"+user_id, requestOptions)
            .then((res) => console.log(res))
            /*.then((res) => {
                console.log(res)
                if (res.result !== "success") {
                    setResponse(res.result)
                } else {
                    setError(true);
                    setResponse(res.result);
                }
            });*/

    };

    const onChange = (e) => {
        //on récup chaque changement des inputs
        e.persist();
        debugger;
        setUsers({ ...users, [e.target.name]: e.target.value }); //à chaque changement des inputs dans le formulaires ont changes les données du setUsers
    };

    return (
        <div className="theme-main">
            <Navbar />
            <div className="main">
                <section className="settings">
                    {error ? response : ""}
                    <div className="menu">
                        <div className="menu-top">
                            <h3>Paramètres</h3>
                            <div className="link">
                                <a href="#mon-compte">Mon compte</a>
                                <a href="#themes">Affichage</a>
                                <a href="#block">Comptes bloqués</a>
                                <a href="#connexions">Connexions</a>
                                <a href="#confidentialite">Confidentialité & Sécurité</a>
                                <a href="#keyboard">Raccourcis clavier</a>
                                <a href="#update">Légal</a>
                            </div>
                        </div>
                        <div className="menu-bottom">
                            <button className="btn-index" onClick={disconnect} >Déconnexion</button>
                            <button className="btn-index" onClick={delete_account}>Supprimer le compte</button>
                        </div>
                    </div>
                    <div className="informations">
                        <div id="mon-compte">
                            <h3>Mon compte</h3>
                            <form className="my-informations">
                                <div className="top-informations">

                                    <div className="pdp-100 middle" style={{ backgroundImage: `url(${src})` }} alt={alt} id="preview-image" onClick={uploadProfilePicture} />
                                    <input type="file" accept=".png, .jpg, .jpeg" id="input-preview-image" onChange={handleChange} />

                                    <div className="info-form">
                                        <span className="name"> {informations.username} </span>
                                        <span className="description">{users.description}</span>
                                    </div>
                                </div>
                                <div className="bottom-informations">
                                    <div className="first-colums">
                                        <span>Username : <br /><input type="text" name="username" onChange={onChange} value={users.username} required /></span>
                                        <span>Nickname: <br /><input type="text" name="nickname" onChange={onChange} value={users.nickname} required /></span>
                                    </div>
                                    <div className="second-colums">
                                        <span>Email : <br /><input type="email" name="email" placeholder="Email" onChange={onChange} value={users.email} required /></span>
                                        <span>Date de naissance: <br />{informations.birthday}</span>
                                    </div>
                                    <div className="third-colums">
                                        <span>Mot de passe actuel : <br /><input type="password" name="password" placeholder="****" onChange={onChange} required /></span>
                                        <span><button type="submit" onClick={handleSubmit} >Mettre à jour le compte</button></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="themes">
                            <h3>Affichage</h3>
                            <div className="theme-choose">
                                <div className="theme-container">
                                    <p>Thème Bleu foncé</p>
                                    <img className="theme-image" draggable="false" src={theme_blue} alt="" />

                                </div>
                                <div className="theme-container">
                                    <p>Thème foncé</p>
                                    <img className="theme-image" draggable="false" src={theme_dark} alt="" />

                                </div>
                                <div className="theme-container">
                                    <p>Thème clair</p>
                                    <img className="theme-image" draggable="false" src={theme_white} alt="" />
                                </div>
                            </div>
                        </div>

                        <div id="block">
                            <h3>Comptes bloqués</h3>
                            <div className="account-blocked">
                                <div className="account">
                                    <img className="pdp-48 align-middle" src={rat} alt="" />
                                    <p className="name align-middle">Henriette</p>
                                    <i className="fas fa-minus-circle" style={{ color: '#EA4646' }}></i>
                                </div>
                            </div>
                        </div>

                        <div id="connexions">
                            <h3>Connexions</h3>
                            <div className="user-connexions">
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Settings;