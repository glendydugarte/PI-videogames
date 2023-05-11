import { CLEAN_DETAIL_VIDEOGAME, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAMES_DETAIL, GET_PLATFORMS, GET_GENRES, FILTER_BY_GENRE, ORDER_BY_NAME, ORDER_BY_RATING, FILTER_CREATED, RESET_FILTERS } from './typeActions';


const initialState = {
    allVideogames: [],
    videogames: [],
    allGenres: [],
    videogamesDetails: {},
    allPlatforms: [],
    resetFilter: [],
  };
  
  export default function rootReducer(state = initialState, action) {
    //action.payload llega las opciones del select
    //console.log(action)
    switch (action.type) {
      case GET_VIDEOGAMES:
        return {
          ...state,
          allVideogames: action.payload,
          videogames: action.payload,
          resetFilter: action.payload,
         
        };
  
      case GET_VIDEOGAMES_BY_NAME:
        return {
          ...state,
          allVideogames: action.payload,
        };

        case CLEAN_DETAIL_VIDEOGAME:
          return{
            ...state,
              videogamesDetails: {}

          };
       case GET_VIDEOGAMES_DETAIL:
         return {
              ...state,
              videogamesDetails: action.payload,
            };
      
  
      case GET_GENRES:
        return {
          ...state,
          allGenres: action.payload,
        };
  
      case GET_PLATFORMS:
        return {
          ...state,
          allPlatforms: action.payload,
        };
  
   
  
      case FILTER_BY_GENRE:
     
        const allGames = state.videogames;
        const filterGame = allGames.filter((elem)=> {
          if (elem.genres) {
            const genres = elem.genres;
            return genres.includes(action.payload);
          }
          return false; 
        });
        return {
          ...state,
          allVideogames: action.payload === "sinFiltro" ? allGames : filterGame,
        };

        case FILTER_CREATED:
        // uso ternario
        const allGameApiDB = state.videogames;
        const createFilter =
          action.payload === "created"
            ? allGameApiDB.filter((elem) => elem.created)
            : allGameApiDB.filter((elem) => !elem.created);
        return {
          ...state,
          allVideogames: action.payload === "all" ? allGameApiDB : createFilter,
        };

        case ORDER_BY_NAME:
        let sortedArr =
          action.payload === "asc"
            ? state.allVideogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
  
                if (a.name < b.name) {
                  return -1;
                }
  
                return 0;
              })
            : state.allVideogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }
  
                if (a.name < b.name) {
                  return 1;
                }
  
                return 0;
              });
        return {
          ...state,
          allVideogames: sortedArr, // paso al estado el ordenamiento
        };
  
      
      case ORDER_BY_RATING:
        let RsortedArr =
          action.payload === "ls"
            ? state.allVideogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                  return 1;
                }
  
                if (a.rating < b.rating) {
                  return -1;
                }
  
                return 0;
              })
            : state.allVideogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                  return -1;
                }
  
                if (a.rating < b.rating) {
                  return 1;
                }
  
                return 0;
              });
        return {
          ...state,
          allVideogames: RsortedArr, // paso al estado el ordenamiento
        };
        case RESET_FILTERS:
      return {
        ...state,
        allVideoGames: [...state.resetFilter],
      };

        
      default:
        return state;
    }
  }