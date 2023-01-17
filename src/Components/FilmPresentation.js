import React from "react";

const FilmComponent = ({ film }) => {
    return (
        <div className="film-container">
            <div className="d-flex-container">
                <div>{film.title}</div>
                <div>{film.rating}</div>
            </div>

            <div>{film.category}</div>
        </div>
    )

}

export default FilmComponent;