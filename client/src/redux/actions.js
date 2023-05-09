import axios from 'axios';
import { GET_VIDEOGAMES, GET_VIDEOGAMES_DETAIL, GET_VIDEOGAMES_BY_NAME, CLEAN_DETAIL_VIDEOGAME, GET_GENRES, GET_PLATFORMS, FILTER_BY_GENRE, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_RATING, DELETE_GAME } from "./typeActions";

const URL= "http://localhost:3001";

export const getVideogames = ()=>{
  return async function(dispatch){
    const response = await axios.get(URL + "/videogames");
    dispatch({
      type: GET_VIDEOGAMES,
      payload: response.data
    });
  };
};

export const getDetails = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL}/videogames/${id}`);
       dispatch({
        type: GET_VIDEOGAMES_DETAIL,
        payload: response.data
      });
  };
};


export const getNameVideoGames = (name)=> {
  return async function(dispatch){
    
     const response = await axios.get(`${URL}/videogames?name=${name}`)
      dispatch({
        type: GET_VIDEOGAMES_BY_NAME,
        payload: response.data
      })
    }
  }


export function cleanDetail(){
  return {
    type: CLEAN_DETAIL_VIDEOGAME,
  }
}







export const filterVideogamesByGenre = (payload) => {
  return {
    type: FILTER_BY_GENRE,
    payload: payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload: payload,
  };
};

export const orderByRating = (payload) => {
  return {
    type: ORDER_BY_RATING,
    payload: payload,
  };
};

// export function getNameVideoGames(name) {
//   return function (dispatch) {
//     axios
//       .get(`http://localhost:3001/videogames?name=${name}`)
//       .then((response) => {
//         dispatch({ type: "GET_VIDEOGAMES_QUERY", payload: response.data });
//       })
//       .catch(() => {
//         alert("Error. Game not found");
//       });
//   };
// }





export const getGenderType = () => {
  return async function (dispatch) {
    try {
      let gt = [];
      let json = await axios.get("http://localhost:3001/videogames");
      let mapper = json.data.map((e) => e.genderTypes);
      mapper.forEach((a) =>
        Array.isArray(a)
          ? a.forEach((e) => (!gt.includes(e) ? gt.push(e) : e))
          : a
      );
      return dispatch({
        type: "GET_GENRE_TYPES",
        payload: gt,
      });
    } catch (e) {
      console.log(e);
    }
  };
};



export function getGenres() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/genres")
      .then((response) => {
        dispatch({ type: GET_GENRES, payload: response.data });
      })
      .catch(() => {
        alert("Error, genres not found");
      });
  };
}



export function getPlatforms() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/platforms")
      .then((response) => {
        dispatch({ type: GET_PLATFORMS, payload: response.data });
      })
      .catch(() => {
        alert("Error, platforms not found");
      });
  };
  }



export function getListGenres() {
 
  return function (dispatch) {
    axios
      .get("http://localhost:3001/genres")
      .then((response) => {
        dispatch({ type: "GET_GENRES", payload: response.data });
      })
      .catch(() => {
        alert("Error genres not found");
      });
  };
}




export function filterCreated(value) {
  // console.log(payload)
  return {
    type: FILTER_CREATED,
    payload: value,
  };
}




export function deleteGame(id){
  return function(dispatch){
    axios.delete(`http://localhost:3001/videogames/${id}`)
    .then((response)=>{
      dispatch({
        type: DELETE_GAME
      })
    })
    .catch(() => {
      alert("Error Delete");
    });
  }
}





