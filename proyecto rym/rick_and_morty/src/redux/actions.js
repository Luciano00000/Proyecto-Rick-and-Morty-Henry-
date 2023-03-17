// export const GET_P = "GET_P"
// export const DELETE_P = "DELETE_P"

// export const getPersonajes = () => {
//     const URL = "https://be-a-rym.up.railway.app/api"
//     const KEY = "a812c5aed2ea.7536aa26fb0dbbdb900c"

//     return function (dispatch) {  
//       fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then((response) => response.json())
//         .then((data) => dispatch({ type: "GET_P", payload: data }));
//     }
// }

// export const getPersonajes = (character) => {
//   return { type: GET_P, payload : character}
// }

// export const deletePersonaje = (id) => {
//     return { type: "DELETE_P", payload: id };
//   };