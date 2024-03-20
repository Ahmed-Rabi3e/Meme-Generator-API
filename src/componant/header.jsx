import React from "react"
import logo from '../images/troll-face.png'

const header = () => {
    return (
        <header className="header">
            <img

                src={logo}
                className="img--header"
                alt="img-meme"
            />
            <h2 className="header--title ">Meme Genretor</h2>
            <h4 className="header--project ">React Project</h4>
        </header>)
}

export default header