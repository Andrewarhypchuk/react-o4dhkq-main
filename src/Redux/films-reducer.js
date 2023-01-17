import { createSlice } from '@reduxjs/toolkit';

export const FilmsSlice = createSlice({
  name: 'films',
  initialState: {
    films:
      [
        {
          id: 1,
          title: 'The Matrix',
          rating: 7.5,
          category: 'Action',
          name: 'The Matrix'
        },
        {
          id: 2,
          title: 'Focus',
          rating: 6.9,
          category: 'Comedy',
          name: 'Focus'
        },
        {
          id: 3,
          title: 'The Lazarus Effect',
          rating: 6.1,
          category: 'Thriller',
          name: 'The Lazarus Effect'
        },
        {
          id: 4,
          title: 'Everly',
          rating: 5.0,
          category: 'Action',
          name: 'Everly'
        },
        {
          id: 5,
          title: 'Maps to the Stars',
          rating: 7.5,
          category: 'Drama',
          name: 'Maps to the Stars'
        },
      ],
    searchTitle: '',
    searchRate: [],
    searchCategory: []
  },
  reducers: {
    addSearchRate: (state, action) => {

      return { ...state, searchRate: [...state.searchRate, action.payload] }
    }
    ,
    removeSearchRate: (state, action) => {
      return {
        ...state, searchRate: state.searchRate.filter(function (item) {
          return item !== action.payload
        })
      }
    },
    addSearchCategory: (state, action) => {
      return { ...state, searchCategory: [...state.searchCategory, action.payload] }
    },
    removeSearchCategory: (state, action) => {
      return {
        ...state, searchCategory: state.searchCategory.filter(function (item) {
          return item !== action.payload
        })
      }
    },
    changeSearchTitle: (state, action) => {
      return { ...state, searchTitle: action.payload }
    }
  },
});

export const selectFilms = (state) => state.data.films;
export const selectFilteredFilms = (state) => {
  const { searchRate, searchCategory, searchTitle } = state.data;

  return state.data.films.filter(film => {
    let isInclude = false;

    if (searchRate.length > 0 ) {
      if(searchRate.includes('all')){
         return true
      }
      let value = Math.floor(film.rating).toString();
       isInclude = searchRate.includes(value);
      if (!isInclude) {
        return false
      }
    }

    if (searchTitle) {
      isInclude = film.title.toLowerCase().includes(searchTitle.toLowerCase());
      if (!isInclude) {
        return false
      }
    }
     (searchCategory.length)
    if (searchCategory.length > 0) {
      if(searchCategory.includes('all')){
        return true
     }
      isInclude = searchCategory.includes(film.category);
      if (!isInclude) {
        return false
      }
    }
    return isInclude
  })

};
export const { addSearchRate, removeSearchRate, addSearchCategory, removeSearchCategory, changeSearchTitle } = FilmsSlice.actions;

export default FilmsSlice.reducer;
