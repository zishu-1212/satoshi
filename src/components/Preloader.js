import React, { useEffect } from "react";
import './Preloader.css';
import LoaderGif from '../assets/media/loader-alt.gif';
function Preloader() {

    const [ShowLoader, setShowLoader] = React.useState(true)
    useEffect(() => {
        setTimeout(function () {
            setShowLoader(false)
        }, 3000);
    },
        [])


    return (
        <>
            {ShowLoader?<div id="loader"><img className="gif" src={LoaderGif} alt="" /></div>:<></>}
        </>
    )
}

export default Preloader;