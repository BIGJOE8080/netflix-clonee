import React, {useState, useEffect} from 'react'
import "./Nav.css";


function Nav() {
    const [show, handleShow] = useState(false);
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className="nav">
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/zikipedia/commons/0/of" />

            <img
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_image/124011999041157" />
        </div>
    )
}

export default Nav