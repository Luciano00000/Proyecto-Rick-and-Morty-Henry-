import style from "./Card.module.css";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { getPersonajes, deletePersonaje } from "../../redux/actions";


function Card({id, name,species,gender,image,onClose,}) {

   // const [isFav, setIsFav] = useState;

   // const handleFavorite = () => {
   //    if (isFav) {
   //       setIsFav(false)
   //       deletePersonaje(id)
   //    }else {
   //       setIsFav(true)
   //       getPersonajes({id, name,species,gender,image,onClose, getPersonajes, deletePersonaje})
   //    }
   // };

   // useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [myFavorites]);


   return (
      <div className={style.container}>
             {/* {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}  */}
         <button className={style.boton} onClick={() => onClose(id)}>
            X
         </button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img  src={image} alt="" />
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
};

export default Card;

// const mapDispatchToProps = (dispatch) => {
//    return{
//       getPersonajes: (character) => {
//          dispatch(getPersonajes(character))
//       },
//       deletePersonaje: (id) => {
//          dispatch(deletePersonaje(id))
//       }
//     }  
// }

// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites
//    }

// }


// export default connect(mapStateToProps, mapDispatchToProps)(Card);
