import React from "react";

import rat from "../../../../Assets/test/rat.jpg";

function Block() {
    return (
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
    )
}

export default Block;