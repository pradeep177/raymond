import React from 'react'
import picture from "../assets/image1.png"
import "../css/loadingPage.css"
import { Link } from "react-router-dom";

function LoadingPage() {
    return (
        <>
        <Link className="text-red" to="/home">BACK TO HOME PAGE</Link>
        <div className="loading-page">  
            <img src={picture} width="250px"height="350px" alt="laoding-img"></img>
            <h3 className="text-red">The First Of A Kind Virtual Trade Show </h3>
            <p className="text-red">@ RAYMONDS 2021 ALL RIGHTS RESERVED</p>
        </div>
        </>
    )
}

export default LoadingPage
