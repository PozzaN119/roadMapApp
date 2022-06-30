import React from 'react'

function EditBtn(props) {


    const editingToggle = () => {props.se(!props.e)}

    return (
        <button id="editBtn" onClick={editingToggle}>
            {props.e?"Back to reading":"Edit"}
        </button>
    )
}

export default EditBtn