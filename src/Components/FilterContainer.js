import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import arrow from '../Assets/img/chevron-down.svg';
import blackStar from '../Assets/img/blackStar.png';
import whiteStar from '../Assets/img/whiteStar.png';
import { addSearchRate, removeSearchRate, addSearchCategory, removeSearchCategory } from "../Redux/films-reducer";

const FilterContainer = () => {
    const dispatch = useDispatch();
    const [isRateOpen, setIsRateOpen] = useState(false);
    const [isGenreOpen, setIsGenreOpen] = useState(false);

    const handleChangeRateIsOpen = (event) => {
        setIsRateOpen(!isRateOpen)
        setIsGenreOpen(false)
    };
    const handleChangeGenreIsOpen = (event) => {
        setIsGenreOpen(!isGenreOpen)
        setIsRateOpen(false)
    };
    const handleRateCheckBox = (e) => {
        if (e.target.checked) {
            dispatch(addSearchRate(e.target.value))
        } else {
            dispatch(removeSearchRate(e.target.value))
        }
    }
    const handleGenreCheckBox = (e) => {
        if (e.target.checked) {
            dispatch(addSearchCategory(e.target.value))
        } else {
            dispatch(removeSearchCategory(e.target.value))
        }
    }

    return (
        <div className="filter-container">
            <div onClick={handleChangeRateIsOpen} className="rate-switcher"><div >Rating</div> <img className={isRateOpen ? 'arrow-down' : 'arrow-up'} src={arrow} /></div>
            <div onClick={handleChangeGenreIsOpen} className="rate-switcher"><div>Genre</div><img className={isGenreOpen ? 'arrow-down' : 'arrow-up'} src={arrow} /></div>
            <div className={isRateOpen ? 'rate-container-opened' : 'rate-container'}>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value='all' />Any rating</div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={1} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={2} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={3} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={4} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={5} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={6} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={7} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={8} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                    <img className="star" src={whiteStar} /></div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={9} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={whiteStar} />
                </div>
                <div className="rate-item"><input onChange={handleRateCheckBox} type='checkbox' value={10} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} />
                    <img className="star" src={blackStar} /></div>
            </div>

            <div className={isGenreOpen ? 'genre-container-opened' : 'genre-container'}>
                <div><input onChange={handleGenreCheckBox} type='checkbox' value="all" />Any genre</div>
                <div><input onChange={handleGenreCheckBox} type='checkbox' value="Action" />Action</div>
                <div><input onChange={handleGenreCheckBox} type='checkbox' value="Comedy" />Comedy</div>
                <div><input onChange={handleGenreCheckBox} type='checkbox' value="Drama" />Drama</div>
                <div><input onChange={handleGenreCheckBox} type='checkbox' value="Thriller" />Thriller</div>
            </div>
        </div>
    )
}

export default FilterContainer;