import React, { useState } from 'react'
import RoadMap from './roadmap'
import Loading from './loading'
import Title from './title'


function App() {

  const [data, setData] = useState({})
  
  
  const [isEditing, setEdit] = useState(false)


  // Compute progress
  let progress = 0

  if(typeof data.roadmap !== 'undefined') {
    let nbrPhase = data.roadmap.length
    let nbrCdt = 0
    for(let i=0; i<nbrPhase; i++) {
      nbrCdt = data.roadmap[i].value.length
      //console.log(nbrCdt)
      for(let j = 0; j < nbrCdt; j++) {
        if(data.roadmap[i].value[j].value) progress = progress + (100/nbrPhase)/nbrCdt
      }
    }
  }

  return (
    <div id="main">
      <Title e={isEditing} se={setEdit}/>
      {(typeof data.roadmap === 'undefined') ? (
        <Loading setData={setData}/>
      ): (
        <RoadMap progress={progress} rm={data.roadmap} e={isEditing}/>
      )}
    </div>
  )
}

export default App
