import React, { useState } from "react";
import axios from 'axios';
import * as S from './styled'
function App(props) {  
  const [usuario, setUsuario ] = useState('j-ricardo');
  function handleSearch(){     
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }
  
  return (    
    <S.Container>
      <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/> 
      <S.Buttton type="button" onClick={handleSearch}>Pesquisar</S.Buttton>
    </S.Container>    
  );
}

export default App;
