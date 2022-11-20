import React, { useRef } from 'react'
import EditModal from './EditModal';

const DisplayWish = ({ wish, handleDelete, editWish}) => {

    const buttonOpen = useRef(null);
    const modalElement = useRef(null);

    const deleteWish = () => {
        handleDelete(wish._id);
    }

    const handleEdit= (id,wish) =>{
        editWish(id,wish);
        modalElement.current.style.display = 'none';
    }

    return (
        <>
            <div className='displayWish'>
                <div className='title'>{wish.titre}</div>
                <p >{wish.description}</p>
                <div className='price'>{wish.prix} EUR</div>
                <button type="button" ref={buttonOpen}>Modifier</button>
                <button onClick={deleteWish}>Supprimer</button>
            </div>
            <div id="personModal" ref={modalElement}>
                <EditModal editWish={handleEdit} wish={wish} buttonOpen={buttonOpen} modalElement={modalElement} />
            </div>
        </>
       
    )
}

export default DisplayWish