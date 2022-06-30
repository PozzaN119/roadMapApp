import React, { useState } from 'react'

function Condition(props) {

  const requestOptions = {
    method: 'POST'
  }

  const sendData = (val) => {
    fetch('/setstate/'+props.phase+'/'+props.cdt.description+'/'+String(val), requestOptions)
      .then(data => console.log(data))
  }

  const [checked, setChecked] = useState(props.cdt.value)

  const changeRMState = () => {
    if(props.e) {
      props.cdt.value = !props.cdt.value
      sendData(props.cdt.value)
    }
    setChecked(props.cdt.value)
    console.log(props.cdt.description+" is set on "+props.cdt.value?"done.":"to do.")
  }
  return (
    <span className='cdt'>
        <p className='cdtN'>{props.cdt.description}</p>
        <input type="checkbox" readOnly checked={checked} onChange={changeRMState} className='cdtB'></input>
    </span>
  )
}

export default Condition