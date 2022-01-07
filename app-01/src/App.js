import React, {useState} from 'react'

import api from './Services/api';

function App() {
  
  function Search(){
    if(input != ''){
      apiRequest(input)
    }else{
      noValueError(input)
    }
    
    function noValueError(Value){
      if(Value === ''){
        alert('Você não preencheu o campo')
      }
    }
  }

  function showLocation(){

  }
  
  async function apiRequest(Value){
    try{
      const response = await api.get(`${Value}/json/`)
      CEPset(response.data)
      inputSet('')
    }catch{
      alert('Esse CEP não existe')
      inputSet('')
    }finally{
      showLocation()
    }
  }



  const [input, inputSet] = useState('')
  const [CEP, CEPset] = useState({})
  
  return (
    <div className='allPage'>
      <h1>Busca CEP</h1>

      <div className='input'>
        <input
          className='cepInput'
          type="Text" 
          placeholder='Digite seu CEP...'
          value={input}
          onChange={(event) => inputSet(event.target.value)}
        />
        <button
          className='buttonSearch'
          onClick={Search}
        >
          Buscar
        </button>
      </div>

      {Object.keys(CEP).length > 0 && (
        <div className='result'>
        <h2>CEP: {CEP.cep}</h2>
        <span>Logradouro: {CEP.logradouro}</span>
        <span>complemento: {CEP.complemento}</span>
        <span>Bairro: {CEP.bairro}</span>
        <span>{CEP.localidade} - {CEP.uf}</span>
      </div>
      )}  
    </div>
  );
}

export default App;
