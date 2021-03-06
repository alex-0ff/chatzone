import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Helmet from "react-helmet";
import OutsideClickHandler from "react-outside-click-handler";

import NavbarDropDown from "./Views/NavbarDropDown";

import logo_text from "../../../Assets/Images/logo_white.png";

function Navbar({ title, description }) {

    let history = useHistory();

    //debugger;
    const jwt = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem("user_info"));
    const [openDropdown, setOpenDropdown] = useState(false)

    if(!jwt || !user )  {
        if(history.location.pathname === "/settings") return history.push("/login");
    }

    const pdp = user ? user.avatar : "empty";

    return (
    <header>
        <Helmet>
            <title>{title}</title>
            { description !== undefined ? <meta name="description" content={description}/> : <meta name="description" content="Chatzone App"/> }
        </Helmet>
        <div className="header">
            <div className="droite">
                <Link to="/" className="link"><img src={logo_text} alt="" /></Link>
            </div>
            
            <input className="research" type="text" placeholder="Rechercher"/>
            <div className="gauche">
                <Link to="/messages/all" className="svg-link align-middle">
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
                        jwt && user ? <Link onClick={() => setOpenDropdown(!openDropdown)}><img src={pdp} className="pdp-navbar pdp-33" alt="" /></Link> : <Link to="/login" >Se connecter</Link>
                    }
                    {
                        openDropdown ? <OutsideClickHandler onOutsideClick={() => setOpenDropdown(!openDropdown)}><NavbarDropDown user={user}/></OutsideClickHandler> : ""
                    }
                        
                </div>
            </div>
        </div>
    </header>
);
}

export default Navbar;