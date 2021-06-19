import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";

import Menu from "./Views/Menu";
import Informations from "./Views/Informations";
import Account from "./Views/Account";
import Themes from "./Views/Themes";
import Block from "./Views/Block";
import Connexions from "./Views/Connexions";
import Security from "./Views/Security";
import Keyboard from "./Views/Keyboard";
import Legal from "./Views/Legal";

function Settings() {

    const { section } = useParams();

    let jwt = localStorage.getItem("jwt");
    let user_info = JSON.parse(localStorage.getItem("user_info"));

    const [page, setPage] = useState(<p>Nothing here</p>);

    const views = [
        {
            name: "all",
            page: <Informations user_info={user_info} jwt={jwt} />
        },
        {
            name: "my-account",
            page: <Account  />
        },
        {
            name: "themes",
            page: <Themes />
        },
        {
            name: "block",
            page: <Block />
        },
        {
            name: "connexions",
            page: <Connexions />
        },
        {
            name: "security",
            page: <Security />
        },
        {
            name: "keyboard",
            page: <Keyboard />
        },
        {
            name: "update",
            page: <Legal />
        }
    ];

    useEffect(() => {
        
        const view = views.find(v => v.name === section);
        view ? setPage(view.page) : setPage(<p>Nothing Here</p>);

    // eslint-disable-next-line
    }, [section])

    return (
        <div>
            <Navbar title="ChatZone - Home"></Navbar>
            <div className="main">
                <section className="settings">
                    <Menu />
                    <div className="informations">
                        {
                            page
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Settings;