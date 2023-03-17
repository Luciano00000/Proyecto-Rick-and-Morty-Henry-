// import { GET_P, DELETE_P } from "./actions";


// const initialState = {
//     myFavorites: []
// }

// const rootReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case GET_P:
//             return { ...state, myFavorites: [...state, action.payload] };

//         case DELETE_P:
//             return {...state, 
//                 myFavorites: 
//                 state.myFavorites.filter((fav) => fav.id !== action.payload),
//             };
//         default:
//             return { ...state };
//     }   
// };

// export default rootReducer;