import React from 'react'
import EditBtn from './editBtn'

function Title(props) {
  return (
    <div id="title">
        <span>
          <h1 id="titleH">Roadmap</h1>
          <p id="titleP">Projet d'apprentissage</p>
        </span>
        <EditBtn e={props.e} se={props.se}/>
    </div>
  )
}

export default Title