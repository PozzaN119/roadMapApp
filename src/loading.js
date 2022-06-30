import React, { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Loading(props) {

    const getData = () => {
        fetch("/getstate").then(
            res => res.json()
        ).then(
            data => {props.setData(data)}
        )
    }

    // getData()
    
    useEffect( () => {
        const interval = setInterval(() => {
            getData()
        }, 1500)

        return () => {
            clearInterval(interval)
        }
    },)

    return (
    <div id='loading'>
        <Spinner animation='border' role="status" >
            <span className='visually-hidden'>
                Loading...
            </span>
        </Spinner>
    </div>
    )
}

export default Loading