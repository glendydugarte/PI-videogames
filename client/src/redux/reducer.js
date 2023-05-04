import { CLEAN_DETAIL_VIDEOGAME, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAMES_DETAIL,  } from "./typeActions";


const initialState = {
    //videogames: [],
    allVideogames: [],
    allGenres: [],
    videogamesDetails: {},
  };
  
  export default function rootReducer(state = initialState, action) {
    //action.payload llega las opciones del select
    //console.log(action)
    switch (action.type) {
      case GET_VIDEOGAMES:
        return {
          ...state,
          allVideogames: action.payload,
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
      
  
      /*case "GET_GENRES":
        return {
          ...state,
          allGenres: action.payload,
        };
  
      case "GET_PLATAFORMS":
        return {
          ...state,
          plataform: action.payload,
        };
  
   
  
      case "FILTER_BY_GENRE":
        const allStateGames = state.allVideogames;
        const tempGames = allStateGames.filter((p)=> {
          if (p.genre) {
            const genres = p.genre;
            return genres.includes(action.payload);
          }
        });
        return {
          ...state,
          videogames: action.payload === "sinFiltro" ? allStateGames : tempGames,
        };
  
      case "SUBMIT_GAME":
        return {
          ...state,
          resPost: action.json,
        };
  
        case "DELETE_GAME":
          return{
            ...state
          }
        
      case "FILTER_CREATED":
        // uso ternario
        const allGameApiDB = state.allVideogames;
        const createFilter =
          action.payload === "created"
            ? allGameApiDB.filter((p) => p.createInDb)
            : state.allVideogames.filter((p) => !p.createInDb);
        return {
          ...state,
          videogames: action.payload === "all" ? allGameApiDB : createFilter,
        };
  
      case "ORDER_BY_NAME":
        let sortedArr =
          action.payload === "asc"
            ? state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
  
                if (a.name < b.name) {
                  return -1;
                }
  
                return 0;
              })
            : state.videogames.sort(function (a, b) {
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
          videogames: sortedArr, // paso al estado el ordenamiento
        };
  
      case "ORDER_BY_RATING":
        let RsortedArr =
          action.payload === "rasd"
            ? state.videogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                  return 1;
                }
  
                if (a.rating < b.rating) {
                  return -1;
                }
  
                return 0;
              })
            : state.videogames.sort(function (a, b) {
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
          videogames: RsortedArr, // paso al estado el ordenamiento
        };*/
      default:
        return state;
    }
  }