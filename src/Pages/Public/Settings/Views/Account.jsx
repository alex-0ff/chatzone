import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../../../Services/Loader";

function Account({ jwt, user_info }){

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
                let request = await fetch("http://boteric.fr:3000/api/v1/users/"+user_info.id, requestOptions);
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

    const delete_account = async () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        };
        let request = await fetch("http://boteric.fr:3000/api/v1/users/"+user_info.id, requestOptions);

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

                const request = await fetch("http://boteric.fr:3000/api/v1/users/"+user_info.id, requestOptions);
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

            const request = await fetch("http://boteric.fr:3000/api/v1/users/"+user_info.id, requestOptions);
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
        <div className="my-account">
            <h3>Mon compte</h3>
            <div className="my-informations">
                <div className="top-informations">
                    <form>
                        <div className="pdp-100 middle" style={{ backgroundImage: `url(${src})` }} alt={alt} id="preview-image" onClick={uploadProfilePicture} />
                        <textarea type="file" accept=".png, .jpg, .jpeg" id="input-preview-image" onChange={handleChange} />
                    </form>
                    <div className="info-form">
                        <span className="name"><textarea type="text" name="username" onChange={onChange} value={users.username} required /></span>
                        <span className="description"><textarea type="text" name="description" onChange={onChange} value={users.description} required /></span>
                    </div>
                </div>
                
                { loading ? <Loader /> : "" }
                { error ? response : "" }

                <form method="PATCH">
                    <div className="bottom-informations">
                        <div>
                            <span>Nickname: <br /><textarea type="text" name="nickname" onChange={onChange} value={users.nickname} required /></span>
                            <span>Email : <br /><textarea type="email" name="email" placeholder="Email" onChange={onChange} value={users.email} required /></span>
                        </div>
                        <div className="second-colums">
                            <span>Birthday: <br />{users.birthday.day} {users.birthday.month} {users.birthday.year}</span>
                        </div>
                        <div className="third-colums">
                            <span>Mot de passe actuel : <br /><textarea type="password" name="password" placeholder="****" onChange={onChange} required /></span>
                            <span><button type="submit" onClick={handleSubmit} >Mettre à jour le compte</button></span>
                            <span><button >Changer de mot de passe</button></span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="menu-bottom">
                <button className="btn-index" onClick={delete_account}>Supprimer le compte</button>
                <button className="btn-index" onClick={deactivate_account}>Désactiver le compte</button>
            </div>
        </div>
    )
}

export default Account;