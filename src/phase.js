import React from 'react'
import Condition from './condition'

function Phase(props) {

    let res = []

    for(let i = 0; i < props.p.value.length; i++ ) {
        res.push(<Condition cdt={props.p.value[i]} e={props.e} phase={props.p.description} key={i}/>)
    }

    return (
    <div className='phase'>
        <p className='phaseN'>{props.p.description}</p>
        <div>
            {res}
        </div>
    </div>
    )
}

export default Phase