import React, { useState } from 'react'
import Header from './components/Header/Header'
import './App.css';
import PunkList from './components/punklist/PunkList';
import punks from './json-file/data.json'
import Selected from './components/Selected/Selected';


const App = () => {

  const [selectedPunk, setSelectedPunk] = useState(0);
  console.log(punks)


  return (
    <div className='app'>
        <Header/>
        <Selected selectedPunk={selectedPunk} punks={punks.assets}/>
        <PunkList punkListData={punks.assets}  setSelectedPunk={setSelectedPunk}/>
    </div>
  )
}

export default App
