import React, { useState } from "react";
import axios from 'axios';
function App(props) {  
  const [usuario, setUsuario ] = useState('j-ricardo');
  function handleSearch(){     
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }
  
  return (    
    <>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/> 
      <button type="button" onClick={handleSearch}>Pesquisar</button>
    </>    
  );
}

export default App;
