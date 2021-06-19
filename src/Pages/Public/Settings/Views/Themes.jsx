import React from "react";

function Themes() {
    return (
        <div>
            <h3>Affichage</h3>
            <div className="theme-choose">
                <div className="theme-container">
                    <h3>Thème Bleu foncé</h3>
                   <div className="theme-box theme-blue">
                        <h3>Titre de l'éléments</h3>
                        <p>Desciption</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentcolor" class="fa-primary" d="M416 96l-217.3 279.3C194.4 380.1 192 387.9 192 394.1L191.1 512L122.3 360.3L416 96z"/>
                            <path fill="currentcolor" class="fa-secondary" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1L191.1 512L192 394.1c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/>
                        </svg>
                   </div>
                </div>
                <div className="theme-container">
                    <h3>Thème Clair</h3>
                    <div className="theme-box theme-white">
                        <h3>Titre de l'éléments</h3>
                        <p>Desciption</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentcolor" class="fa-primary" d="M416 96l-217.3 279.3C194.4 380.1 192 387.9 192 394.1L191.1 512L122.3 360.3L416 96z"/>
                            <path fill="currentcolor" class="fa-secondary" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1L191.1 512L192 394.1c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/>
                        </svg>
                   </div>
                </div>
                <div className="theme-container">
                    <h3>Thème Foncé</h3>
                    <div className="theme-box theme-main">
                        <h3>Titre de l'éléments</h3>
                        <p>Desciption</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentcolor" class="fa-primary" d="M416 96l-217.3 279.3C194.4 380.1 192 387.9 192 394.1L191.1 512L122.3 360.3L416 96z"/>
                            <path fill="currentcolor" class="fa-secondary" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1L191.1 512L192 394.1c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/>
                        </svg>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Themes;