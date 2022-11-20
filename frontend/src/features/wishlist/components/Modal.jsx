import React, { useEffect } from 'react'
import AddWish from './AddWish';

const Modal = (props) => {

    const close = () => {
        props.modalElement.current.style.display = 'none';
    }

    const open = () => {
        props.modalElement.current.style.display = 'block';
    }

    useEffect(() => {
        props.buttonOpen.current.onclick = open
    });

    return (
        <div>
            <AddWish close={close} addWish={props.addWish}/>
        </div>
    )
}

export default Modal