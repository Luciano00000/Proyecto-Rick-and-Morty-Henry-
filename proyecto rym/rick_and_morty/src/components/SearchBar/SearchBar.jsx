import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")

   const hadleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={styles.bar}>
         <input 
            type='search' 
            onChange={hadleChange}
         />
      <button onClick={() => onSearch(id)}>
         Agregar
      </button>
      </div>
   );
}

