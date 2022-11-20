import React, { useEffect } from "react";
import EditWish from "./EditWish";

const EditModal = (props) => {

    const close = () => {
        props.modalElement.current.style.display = 'none';
    }

    const open = () => {
        props.modalElement.current.style.display = 'block';
    }

    useEffect(() => {
        props.buttonOpen.current.onclick = open
    });
   
    return <EditWish editWish={props.editWish} wish={props.wish} close={close}/>;
};

export default EditModal;
