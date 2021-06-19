import React from "react";

function Menu(){

    return (
        <div className="menu">
            <div className="menu-top">
                <h3>Paramètres</h3>
                <div className="link">
                    <a href="/settings/my-account">Mon compte</a>
                    <a href="/settings/themes">Affichage</a>
                    <a href="/settings/block">Comptes bloqués</a>
                    <a href="/settings/connexions">Connexions</a>
                    <a href="/settings/security">Confidentialité & Sécurité</a>
                    <a href="/settings/keyboard">Raccourcis clavier</a>
                    <a href="/settings/update">Légal</a>
                </div>
            </div>
        </div>
    )
}

export default Menu;