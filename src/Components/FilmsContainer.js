import React from "react";
import { useDispatch ,useSelector} from 'react-redux';
import { selectFilteredFilms, changeSearchTitle } from "../Redux/films-reducer";
import FilmComponent from "./FilmPresentation";
import FilterContainer from "./FilterContainer";


const FilmsContainer = () => {
    const dispatch = useDispatch();
    const films = useSelector(selectFilteredFilms);

    return (
        <div className="d-flex">
            <div className="d-flex-column">
                <input className="search-input" placeholder="Enter movie name" type='text' onChange={(e) => { dispatch(changeSearchTitle(e.target.value)) }} />
                {films.map((film) => {
                    return <FilmComponent key={film.id} film={film} />
                })}
            </div>
            <FilterContainer />
        </div>
    )

}

export default FilmsContainer;