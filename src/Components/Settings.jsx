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
    let user_info = JSON.parse(localStorage.getItem("user_info"));
    
    const [error, setError] = useState(false);
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

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
        password: "",
        birthday: {
            year: "",
            month: "",
            day: ""
        }
    });

    const history = useHistory();

    const delete_account = async () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        };
        let request = await fetch("http://boteric.tk:3000/api/v1/users/"+user_info.id, requestOptions);

        if (request.status === 204) {
            localStorage.removeItem("jwt");
            localStorage.removeItem("user_id");
            history.push('/login');
            
        } else {
            let res = await request.json();
            setError(true)
            setResponse(res.error)
        }
    }

    const deactivate_account = async () => {
        return;
    }

    useEffect(() => {
        async function fetchData() {

            let jwt = localStorage.getItem("jwt");
            let user_info = JSON.parse(localStorage.getItem("user_info"));
            let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
            
            if (jwt) {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${jwt}`
                    }
                };
                let request = await fetch("http://boteric.tk:3000/api/v1/users/"+user_info.id, requestOptions);
                let res = await request.json();
                let result = res.result;

                setProfilePicture({ src: result.avatar });
                setUsers({
                    email: result.email,
                    username: result.username,
                    nickname: result.nickname,
                    description: result.description,
                    birthday: {
                        year: result.birthday.year,
                        month: months[result.birthday.month],
                        day: result.birthday.day
                    }
                })
            }
        }
        fetchData();
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
            fileReader.onload = async function (fileLoadedEvent) {
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
                setLoading(true)

                const request = await fetch("http://boteric.tk:3000/api/v1/users/"+user_info.id, requestOptions);
                const res = await request.json();

                if(res.error) return setLoading(false)

                localStorage.setItem("user_info", JSON.stringify(res.result));
                setLoading(false)
            
            };
            // Convert data to base64
            fileReader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleSubmit = async (e) => {

        let data = {
            //on récup les éléments du users
            email: users.email,
            username: users.username,
            nickname: users.nickname,
            password: users.password,
            description: users.description
        };

        //on envoie le formulaire et on fait tout ce qu'il faut dedans (créer une fonction pour simplifier tout)
        e.preventDefault();

        if (users.password?.length < 1 || users.description?.length < 1 || users.email?.length < 1 || users.nickname?.length < 1|| users.username?.length < 1 ) {

            setError(true);
            setResponse("Oops, verify that all your field are not empty !!")
        }else{

            const requestOptions = {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify(data),
            };
            setLoading(true)

            const request = await fetch("http://boteric.tk:3000/api/v1/users/"+user_info.id, requestOptions);
            const res = await request.json();

            if(res.error) return setLoading(false)

            localStorage.setItem("user_info", JSON.stringify(res.result));
            setLoading(false)
        }
    };
    const onChange = (e) => {
        //on récup chaque changement des inputs
        e.persist();
        //debugger;
        setUsers({ ...users, [e.target.name]: e.target.value }); //à chaque changement des inputs dans le formulaires ont changes les données du setUsers
    };
    return (
        <div className="theme-main">
            <Navbar />
            <div className="main">
                <section className="settings">
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
                    </div>
                    <div className="informations">
                        <div id="mon-compte">
                            <h3>Mon compte</h3>
                            <div className="my-informations">
                                <div className="top-informations">
                                    <form>
                                        <div className="pdp-100 middle" style={{ backgroundImage: `url(${src})` }} alt={alt} id="preview-image" onClick={uploadProfilePicture} />
                                        <input type="file" accept=".png, .jpg, .jpeg" id="input-preview-image" onChange={handleChange} />
                                    </form>
                                    <div className="info-form">
                                        <span className="name"><input type="text" name="username" onChange={onChange} value={users.username} required /></span>
                                        <span className="description"><input type="text" name="description" onChange={onChange} value={users.description} required /></span>
                                    </div>
                                </div>
                                
                                { loading ? "Loading ..." : "" }
                                { error ? response : "" }

                                <form method="PATCH">
                                    <div className="bottom-informations">
                                        <div className="first-colums">
                                            <span>Nickname: <br /><input type="text" name="nickname" onChange={onChange} value={users.nickname} required /></span>
                                            <span>Email : <br /><input type="email" name="email" placeholder="Email" onChange={onChange} value={users.email} required /></span>
                                        </div>
                                        <div className="second-colums">
                                            <span>Birthday: <br />{users.birthday.day} {users.birthday.month} {users.birthday.year}</span>
                                        </div>
                                        <div className="third-colums">
                                            <span>Mot de passe actuel : <br /><input type="password" name="password" placeholder="****" onChange={onChange} required /></span>
                                            <span><button type="submit" onClick={handleSubmit} >Mettre à jour le compte</button></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="menu-bottom">
                                <button className="btn-index" onClick={delete_account}>Supprimer le compte</button>
                                <button className="btn-index" onClick={deactivate_account}>Désactiver le compte</button>
                            </div>
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