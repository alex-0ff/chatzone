import React from "react";
import { Link, useHistory } from "react-router-dom";

import logo_text from "../assets/Images/logo_white.png";

function Navbar() {

    let history = useHistory();

    //debugger;
    const jwt = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem("user_info"));

    if(!jwt || !user )  {
        if(history.location.pathname === "/settings") return history.push("/login");
    } 

    const pdp = user ? user.avatar : "empty";

    const addClass = (e) => {
        e.preventDefault();

        const section = "drop-down";

        document.getElementById(`${section}`).classList.contains("visible") ? document.getElementById(`${section}`).classList.remove("visible") : document.getElementById(`${section}`).classList.add("visible");
    }

    const disconnect = (e) => {
        e.preventDefault();

        localStorage.removeItem("jwt");
        localStorage.removeItem("user_info");
        history.push('/login');
    }

    return (
        <header>
            <div className="header">
                <div className="droite">
                    <Link to="/" className="link"><img src={logo_text} alt="" /></Link>
                </div>
                
                <input className="research" type="text" placeholder="Rechercher"/>
                <div className="gauche">
                    <Link to="/messages" className="svg-link align-middle">
                        <svg aria-hidden="true" focusable="false" data-prefix="fad" role="img" viewBox="0 0 640 512">
                            <g>
                                <path fill="currentColor" className="fa-secondary"
                                    d="M468.53,306.575c-4.14-10.239-15.798-15.188-26.038-11.046c-10.241,4.14-15.187,15.797-11.047,26.038L455,379.833l-69.958-30.839c-5.064-2.232-10.827-2.267-15.917-0.095c-23.908,10.201-49.52,15.373-76.124,15.373c-107.073,0-179-83.835-179-162.136c0-89.402,80.299-162.136,179-162.136s179,72.734,179,162.136c0,6.975-0.65,15.327-1.781,22.913c-1.63,10.925,5.905,21.102,16.83,22.732c10.926,1.634,21.103-5.905,22.732-16.83c1.431-9.59,2.219-19.824,2.219-28.815c0-54.33-23.006-105.308-64.783-143.543C405.936,20.809,351.167,0,293.001,0S180.067,20.809,138.784,58.592c-37.332,34.168-59.66,78.516-63.991,126.335C27.836,216.023,0.001,265.852,0.001,319.525c0,33.528,10.563,65.34,30.67,92.717L1.459,484.504c-3.051,7.546-1.224,16.189,4.621,21.855c3.809,3.694,8.828,5.642,13.925,5.642c2.723-0.001,5.469-0.556,8.063-1.7l84.229-37.13c21.188,7.887,43.585,11.88,66.703,11.88c0.5,0,0.991-0.039,1.482-0.075c33.437-0.253,65.944-9.048,94.098-25.507c25.218-14.744,45.962-34.998,60.505-58.917c14.199-2.55,28.077-6.402,41.547-11.551l107.301,47.3c2.595,1.143,5.34,1.7,8.063,1.7c5.097-0.001,10.117-1.949,13.926-5.642c5.845-5.666,7.672-14.308,4.621-21.855L468.53,306.575z M179.002,445c-0.273,0-0.539,0.03-0.81,0.041c-20.422-0.104-40.078-4.118-58.435-11.95c-5.089-2.173-10.852-2.138-15.916,0.095l-46.837,20.646l15.109-37.375c2.793-6.909,1.512-14.799-3.322-20.47c-18.835-22.097-28.79-48.536-28.79-76.462c0-31.961,13.445-62.244,36.969-85.206c7.324,39.925,27.989,78.117,59.162,108.119c38.791,37.333,90.101,58.961,145.506,61.565C255.626,429.608,218.402,445,179.002,445z" />
                            </g>
                        </svg>
                    </Link>
                    <Link to="/explore" className="svg-link align-middle">
                        <svg aria-hidden="true" focusable="false" data-prefix="fad" role="img" viewBox="0 0 512 400">
                            <g>
                                <path fill="currentColor" className="fa-secondary" d="m448 106.839844h-64.8125l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082032-26.132812-11.390625-3.050782-23.105468 3.710937-26.132812 15.082031l-24.339844 90.859375h-151.511719l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082031-26.132812-11.394532-3.027344-23.082032 3.710937-26.113282 15.082031l-24.363281 90.859375h-79.359375c-11.777344 0-21.332031 9.535156-21.332031 21.332031 0 11.800781 9.554687 21.335937 21.332031 21.335937h67.902344l-34.324219 128h-76.246094c-11.773437 0-21.332031 9.535157-21.332031 21.332032s9.558594 21.332031 21.332031 21.332031h64.8125l-21.398437 79.808594c-3.050782 11.371093 3.691406 23.082031 15.082031 26.132812 1.835937.492188 3.691406.726563 5.503906.726563 9.410157 0 18.050781-6.273438 20.589844-15.808594l24.382813-90.859375h151.507812l-21.398438 79.808594c-3.046874 11.371093 3.691407 23.082031 15.085938 26.132812 1.832031.492188 3.6875.726563 5.523438.726563 9.410156 0 18.046874-6.273438 20.585937-15.808594l24.363281-90.859375h79.359375c11.777344 0 21.335938-9.535156 21.335938-21.332031s-9.558594-21.332032-21.335938-21.332032h-67.902343l34.324218-128h76.246094c11.777344 0 21.332031-9.535156 21.332031-21.335937 0-11.796875-9.554687-21.332031-21.332031-21.332031zm-154.753906 170.667968h-151.507813l34.324219-128h151.511719zm0 0" />
                            </g>
                        </svg>
                    </Link>
                    <Link to="/notifications" className="svg-link">
                        <svg aria-hidden="true" focusable="false" data-prefix="fad" role="img" viewBox="0 0 576 512">
                            <g>
                                <path fill="currentColor"
                                    d="M411.404,288.506c-18.455-45.014-27.685-92.455-27.685-142.325c0-31.405-9.131-56.337-27.398-74.802
                                    c-18.28-18.464-43.406-29.602-75.383-33.407c1.52-3.424,2.279-6.945,2.279-10.562c0-7.614-2.663-14.091-7.991-19.416
                                    C269.898,2.663,263.427,0,255.812,0c-7.61,0-14.083,2.663-19.414,7.994c-5.33,5.329-7.993,11.802-7.993,19.416
                                    c0,3.617,0.76,7.135,2.285,10.562c-31.977,3.809-57.103,14.942-75.375,33.407c-18.271,18.464-27.406,43.396-27.406,74.802
                                    c0,49.87-9.229,97.311-27.694,142.325c-18.464,45.015-45.776,82.847-81.942,113.492c0,9.896,3.617,18.463,10.85,25.693
                                    c7.232,7.231,15.796,10.852,25.697,10.852h127.907c0,20.178,7.135,37.404,21.411,51.675c14.277,14.273,31.504,21.412,51.678,21.412
                                    c20.177,0,37.404-7.139,51.675-21.412c14.273-14.271,21.412-31.497,21.412-51.675H456.81c9.897,0,18.47-3.613,25.694-10.852
                                    c7.234-7.23,10.852-15.797,10.852-25.693C457.196,371.353,429.881,333.521,411.404,288.506z M255.816,488.787
                                    c-13.894,0-25.747-4.896-35.548-14.698c-9.801-9.804-14.703-21.658-14.703-35.553c0-3.046,1.524-4.568,4.568-4.568
                                    c3.046,0,4.57,1.522,4.57,4.568c0,11.231,4.043,20.889,12.132,28.982c8.091,8.094,17.749,12.135,28.98,12.135
                                    c3.046,0,4.575,1.53,4.575,4.569C260.392,487.268,258.862,488.787,255.816,488.787z M70.523,401.998
                                    c31.217-34.454,54.674-73.614,70.376-117.486s23.557-89.982,23.557-138.327c0-48.727,30.452-73.089,91.36-73.089
                                    c60.907,0,91.361,24.362,91.361,73.089c0,48.345,7.851,94.455,23.555,138.327c15.697,43.875,39.167,83.032,70.38,117.486H70.523z"
                                    className="fa-secondary">
                                </path>
                            </g>
                        </svg>
                    </Link>
                    <div className="dropdown">
                        {
                            jwt && user ? <Link onClick={addClass}><img src={pdp} className="pdp-navbar pdp-33" alt="" /></Link> : <Link to="/login" >Se connecter</Link>
                        }
                        <div id="drop-down" className="drop-down-menu">
                            <Link to={user.nickname}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" role="img" viewBox="0 0 576 512">
                                <g>
                                    <path fill="currentColor" className="fa-secondary" d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"/>
                                </g>
                                <g>
                                    <path fill="currentColor" className="fa-secondary" d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301zM451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"/>
                                </g>
                            </svg>
                                <span>Profil</span>
                            </Link>
                            <Link to="/settings">
                                <svg aria-hidden="true" focusable="false" data-prefix="fad" role="img" viewBox="0 0 576 512">
                                    <g>
                                    <path fill="currentColor" className="fa-primary" d="M333.186,376.438c0-1.902-0.668-3.806-1.999-5.708c-10.66-12.758-19.223-23.702-25.697-32.832
                                            c3.997-7.803,7.043-15.037,9.131-21.693l44.255-6.852c1.718-0.194,3.241-1.19,4.572-2.994c1.331-1.816,1.991-3.668,1.991-5.571
                                            v-52.822c0-2.091-0.66-3.949-1.991-5.564s-2.95-2.618-4.853-2.993l-43.4-6.567c-2.098-6.473-5.331-14.281-9.708-23.413
                                            c2.851-4.19,7.139-9.902,12.85-17.131c5.709-7.234,9.713-12.371,11.991-15.417c1.335-1.903,1.999-3.713,1.999-5.424
                                            c0-5.14-13.706-20.367-41.107-45.683c-1.902-1.52-3.901-2.281-6.002-2.281c-2.279,0-4.182,0.659-5.712,1.997L245.815,150.9
                                            c-7.801-3.996-14.939-6.945-21.411-8.854l-6.567-43.68c-0.187-1.903-1.14-3.571-2.853-4.997c-1.714-1.427-3.617-2.142-5.713-2.142
                                            h-53.1c-4.377,0-7.232,2.284-8.564,6.851c-2.286,8.757-4.473,23.416-6.567,43.968c-8.183,2.664-15.511,5.71-21.982,9.136
                                            l-32.832-25.693c-1.903-1.335-3.901-1.997-5.996-1.997c-3.621,0-11.138,5.614-22.557,16.846
                                            c-11.421,11.228-19.229,19.698-23.413,25.409c-1.334,1.525-1.997,3.428-1.997,5.712c0,1.711,0.662,3.614,1.997,5.708
                                            c10.657,12.756,19.221,23.7,25.694,32.832c-3.996,7.808-7.04,15.037-9.132,21.698l-44.255,6.848
                                            c-1.715,0.19-3.236,1.188-4.57,2.993C0.666,243.35,0,245.203,0,247.105v52.819c0,2.095,0.666,3.949,1.997,5.564
                                            c1.334,1.622,2.95,2.525,4.857,2.714l43.396,6.852c2.284,7.23,5.618,15.037,9.995,23.411c-3.046,4.191-7.517,9.999-13.418,17.418
                                            c-5.905,7.427-9.805,12.471-11.707,15.133c-1.332,1.903-1.999,3.717-1.999,5.421c0,5.147,13.706,20.369,41.114,45.687
                                            c1.903,1.519,3.899,2.275,5.996,2.275c2.474,0,4.377-0.66,5.708-1.995l33.689-25.406c7.801,3.997,14.939,6.943,21.413,8.847
                                            l6.567,43.684c0.188,1.902,1.142,3.572,2.853,4.996c1.713,1.427,3.616,2.139,5.711,2.139h53.1c4.38,0,7.233-2.282,8.566-6.851
                                            c2.284-8.949,4.471-23.698,6.567-44.256c7.611-2.275,14.938-5.235,21.982-8.846l32.833,25.693
                                            c1.903,1.335,3.901,1.995,5.996,1.995c3.617,0,11.091-5.66,22.415-16.991c11.32-11.317,19.175-19.842,23.555-25.55
                                            C332.518,380.53,333.186,378.724,333.186,376.438z M234.397,325.626c-14.272,14.27-31.499,21.408-51.673,21.408
                                            c-20.179,0-37.406-7.139-51.678-21.408c-14.274-14.277-21.412-31.505-21.412-51.68c0-20.174,7.138-37.401,21.412-51.675
                                            c14.272-14.275,31.5-21.411,51.678-21.411c20.174,0,37.401,7.135,51.673,21.411c14.277,14.274,21.413,31.501,21.413,51.675
                                            C255.81,294.121,248.675,311.349,234.397,325.626z"/>
                                        <path fill="currentColor" className="fa-secondary" d="M505.628,391.29c-2.471-5.517-5.329-10.465-8.562-14.846c9.709-21.512,14.558-34.646,14.558-39.402
                                            c0-0.753-0.373-1.424-1.14-1.995c-22.846-13.322-34.643-19.985-35.405-19.985l-1.711,0.574
                                            c-7.803,7.807-16.563,18.463-26.266,31.977c-3.805-0.379-6.656-0.574-8.559-0.574c-1.909,0-4.76,0.195-8.569,0.574
                                            c-2.655-4-7.61-10.427-14.842-19.273c-7.23-8.846-11.611-13.277-13.134-13.277c-0.38,0-3.234,1.522-8.566,4.575
                                            c-5.328,3.046-10.943,6.276-16.844,9.709c-5.906,3.433-9.229,5.328-9.992,5.711c-0.767,0.568-1.144,1.239-1.144,1.992
                                            c0,4.764,4.853,17.888,14.559,39.402c-3.23,4.381-6.089,9.329-8.562,14.842c-28.363,2.851-42.544,5.805-42.544,8.85v39.968
                                            c0,3.046,14.181,5.996,42.544,8.85c2.279,5.141,5.137,10.089,8.562,14.839c-9.706,21.512-14.559,34.646-14.559,39.402
                                            c0,0.76,0.377,1.431,1.144,1.999c23.216,13.514,35.022,20.27,35.402,20.27c1.522,0,5.903-4.473,13.134-13.419
                                            c7.231-8.948,12.18-15.413,14.842-19.41c3.806,0.373,6.66,0.564,8.569,0.564c1.902,0,4.754-0.191,8.559-0.564
                                            c2.659,3.997,7.611,10.462,14.842,19.41c7.231,8.946,11.608,13.419,13.135,13.419c0.38,0,12.187-6.759,35.405-20.27
                                            c0.767-0.568,1.14-1.235,1.14-1.999c0-4.757-4.855-17.891-14.558-39.402c3.426-4.75,6.279-9.698,8.562-14.839
                                            c28.362-2.854,42.544-5.804,42.544-8.85v-39.968C548.172,397.098,533.99,394.144,505.628,391.29z M464.37,445.962
                                            c-7.128,7.139-15.745,10.715-25.834,10.715c-10.092,0-18.705-3.576-25.837-10.715c-7.139-7.139-10.712-15.748-10.712-25.837
                                            c0-9.894,3.621-18.466,10.855-25.693c7.23-7.231,15.797-10.849,25.693-10.849c9.894,0,18.466,3.614,25.7,10.849
                                            c7.228,7.228,10.849,15.8,10.849,25.693C475.078,430.214,471.512,438.823,464.37,445.962z"/>
                                        <path fill="currentColor" className="fa-third" d="M505.628,98.931c-2.471-5.52-5.329-10.468-8.562-14.849c9.709-21.505,14.558-34.639,14.558-39.397
                                            c0-0.758-0.373-1.427-1.14-1.999c-22.846-13.323-34.643-19.984-35.405-19.984l-1.711,0.57
                                            c-7.803,7.808-16.563,18.464-26.266,31.977c-3.805-0.378-6.656-0.57-8.559-0.57c-1.909,0-4.76,0.192-8.569,0.57
                                            c-2.655-3.997-7.61-10.42-14.842-19.27c-7.23-8.852-11.611-13.276-13.134-13.276c-0.38,0-3.234,1.521-8.566,4.569
                                            c-5.328,3.049-10.943,6.283-16.844,9.71c-5.906,3.428-9.229,5.33-9.992,5.708c-0.767,0.571-1.144,1.237-1.144,1.999
                                            c0,4.758,4.853,17.893,14.559,39.399c-3.23,4.38-6.089,9.327-8.562,14.847c-28.363,2.853-42.544,5.802-42.544,8.848v39.971
                                            c0,3.044,14.181,5.996,42.544,8.848c2.279,5.137,5.137,10.088,8.562,14.847c-9.706,21.51-14.559,34.639-14.559,39.399
                                            c0,0.757,0.377,1.426,1.144,1.997c23.216,13.513,35.022,20.27,35.402,20.27c1.522,0,5.903-4.471,13.134-13.418
                                            c7.231-8.947,12.18-15.415,14.842-19.414c3.806,0.378,6.66,0.571,8.569,0.571c1.902,0,4.754-0.193,8.559-0.571
                                            c2.659,3.999,7.611,10.466,14.842,19.414c7.231,8.947,11.608,13.418,13.135,13.418c0.38,0,12.187-6.757,35.405-20.27
                                            c0.767-0.571,1.14-1.237,1.14-1.997c0-4.76-4.855-17.889-14.558-39.399c3.426-4.759,6.279-9.707,8.562-14.847
                                            c28.362-2.853,42.544-5.804,42.544-8.848v-39.971C548.172,104.737,533.99,101.787,505.628,98.931z M464.37,153.605
                                            c-7.128,7.139-15.745,10.708-25.834,10.708c-10.092,0-18.705-3.569-25.837-10.708c-7.139-7.135-10.712-15.749-10.712-25.837
                                            c0-9.897,3.621-18.464,10.855-25.697c7.23-7.233,15.797-10.85,25.693-10.85c9.894,0,18.466,3.621,25.7,10.85
                                            c7.228,7.232,10.849,15.8,10.849,25.697C475.078,137.856,471.512,146.47,464.37,153.605z"/>
                                    </g>
                                </svg>
                                <span>Paramètres</span>
                            </Link>
                            <Link onClick={disconnect}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fad" role="img" viewBox="0 0 576 512">
                                    <g>
                                        <path fill="currentColor" className="fa-secondary" d="M182.725,379.151c-0.572-1.522-0.769-2.816-0.575-3.863c0.193-1.04-0.472-1.902-1.997-2.566
                                            c-1.525-0.664-2.286-1.191-2.286-1.567c0-0.38-1.093-0.667-3.284-0.855c-2.19-0.191-3.283-0.288-3.283-0.288h-3.71h-3.14H82.224
                                            c-12.562,0-23.317-4.469-32.264-13.421c-8.945-8.946-13.417-19.698-13.417-32.258V123.335c0-12.562,4.471-23.313,13.417-32.259
                                            c8.947-8.947,19.702-13.422,32.264-13.422h91.361c2.475,0,4.421-0.614,5.852-1.854c1.425-1.237,2.375-3.094,2.853-5.568
                                            c0.476-2.474,0.763-4.708,0.859-6.707c0.094-1.997,0.048-4.521-0.144-7.566c-0.189-3.044-0.284-4.947-0.284-5.712
                                            c0-2.474-0.905-4.611-2.712-6.423c-1.809-1.804-3.949-2.709-6.423-2.709H82.224c-22.648,0-42.016,8.042-58.101,24.125
                                            C8.042,81.323,0,100.688,0,123.338v200.994c0,22.648,8.042,42.018,24.123,58.095c16.085,16.091,35.453,24.133,58.101,24.133
                                            h91.365c2.475,0,4.422-0.622,5.852-1.854c1.425-1.239,2.375-3.094,2.853-5.571c0.476-2.471,0.763-4.716,0.859-6.707
                                            c0.094-1.999,0.048-4.518-0.144-7.563C182.818,381.817,182.725,379.915,182.725,379.151z"/>
                                        <path fill="currentColor" className="fa-secondary" d="M442.249,210.989L286.935,55.67c-3.614-3.612-7.898-5.424-12.847-5.424c-4.949,0-9.233,1.812-12.851,5.424
                                            c-3.617,3.617-5.424,7.904-5.424,12.85v82.226H127.907c-4.952,0-9.233,1.812-12.85,5.424c-3.617,3.617-5.424,7.901-5.424,12.85
                                            v109.636c0,4.948,1.807,9.232,5.424,12.847c3.621,3.61,7.901,5.427,12.85,5.427h127.907v82.225c0,4.945,1.807,9.233,5.424,12.847
                                            c3.617,3.617,7.901,5.428,12.851,5.428c4.948,0,9.232-1.811,12.847-5.428L442.249,236.69c3.617-3.62,5.425-7.898,5.425-12.848
                                            C447.674,218.894,445.866,214.606,442.249,210.989z"/>
                                    </g>
                                </svg>
                                <span>Déconnexion</span>
                            </Link>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="254.965" height="254.965" viewBox="0 0 2667 2667">
                                <path className="cls-1" d="M1334,0.4c735.97,0,1332.6,597.072,1332.6,1333.6S2069.97,2667.6,1334,2667.6,1.4,2070.53,1.4,1334,598.026,0.4,1334,.4Z"/>
                                <image data-name="Calque 5" x="562" y="710" width="1523" height="1523" xlinkHref="data:img/png;base64,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"/>
                                <image data-name="Calque 1 copie" x="408" y="382" width="1853" height="1903" xlinkHref="data:img/png;base64,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"/>
                            </svg>
                                { user ? <span>{user.chatzonecoin} CZC</span> : <span>null</span> }
                            </Link>
                        </div>  
                    </div>
  
                    
                </div>
            </div>
        </header>
    );
}

export default Navbar;