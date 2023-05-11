import React from "react";
//import image from "../images/error-404.jpg";
import style from  "./NotFound.module.css";



function NotFound() {

    return (
        <div className={style.notFound} >
            <div>
            <h1 className={style.not}>NOT FOUND</h1>

            </div>
        </div>
    )
}

export default NotFound;