import React, { useContext } from "react";
import { createPostContext } from "../PostsContext";
import OutsideClickHandler from "react-outside-click-handler";

function CreatePost() {

    const [ writePost, setWritePost ] = useContext(createPostContext);
    
    return (
            <div className="real-post">              
                <OutsideClickHandler onOutsideClick={() => setWritePost(!writePost)}>
                    <div className="real-post-content">
                        <div className="real-post-header">
                            <h2>Créer un post :</h2>
                            <button className="svg-link" onClick={() => setWritePost(!writePost)}><svg className="fa-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M336.1 175c-9.375-9.375-24.56-9.375-33.94 0L256 222.1L208.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03L175 303c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L256 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94l-47.03-47.03l47.03-47.03C346.3 199.6 346.3 184.4 336.1 175zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256S512 397.4 512 256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/></svg></button>
                        </div>
                        <div>
                            <textarea />
                        </div>
                        <div className="real-post-bottom-div">
                            <div className="real-post-bottom">
                                <button className="svg-link"><svg className="fa-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"/></svg></button>
                                <button className="svg-link"><svg className="fa-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 0c-3.25 0-6.5 .4896-9.625 1.49l-304 96.01C153.1 101.8 144 114 144 128v235.1c-15-7.375-31.38-11.12-48-11.12C42.1 352 0 387.8 0 432S42.1 512 95.1 512c49.38 0 89.5-31.12 94.88-71.13c.75-2.75 1.123-5.95 1.123-8.825L192 256l272-85.88v129c-15-7.375-31.38-11.12-48.01-11.12c-53 0-95.1 35.75-95.1 79.1s42.1 79.1 95.1 79.1c49.38 0 89.51-31.25 95.01-71.13c.625-2.75 .875-5.5 1-8.25V31.99C512 14.36 497.8 0 480 0zM96 464c-28.25 0-48-16.88-48-32s19.75-32 48-32s48 16.88 48 32S124.2 464 96 464zM464 368c0 15.12-19.75 32-48 32s-48-16.88-48-32s19.75-32 48-32S464 352.9 464 368zM464 119.8L192 205.6V139.8l272-85.88V119.8z"/></svg></button>
                            </div>
                            <div className="real-post-bottom">
                                <button className="svg-link"><svg className="fa-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"/></svg></button>
                            </div>
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
    )
}

export default CreatePost;