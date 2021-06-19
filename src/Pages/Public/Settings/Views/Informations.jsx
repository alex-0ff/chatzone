import React from "react";

import Account from "./Account";
import Themes from "./Themes";
import Block from "./Block";
import Connexions from "./Connexions";
import Security from "./Security";
import Keyboard from "./Keyboard";
import Legal from "./Legal";

function Informations({ jwt, user_info }) {

    return (
        <>
            <Account user_info={user_info} jwt={jwt} />
            <Themes />
            <Block />
            <Connexions />
            <Security />
            <Keyboard />
            <Legal />
        </>
    )
}

export default Informations;