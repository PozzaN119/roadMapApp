import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Phase from './phase'


function RoadMap(props) {

    let res = []

    for(let i = 0; i < props.rm.length; i++ ) {res.push(<Phase p={props.rm[i]} e={props.e} key={i}/>)}

    return (
    <div>
        <ProgressBar striped now={props.progress} />
        <div id='detail'>
            {res}
        </div>
    </div>
    )
}

export default RoadMap