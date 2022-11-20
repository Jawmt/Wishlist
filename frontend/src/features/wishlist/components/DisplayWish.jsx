import React, { useRef } from 'react'
import EditModal from './EditModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DisplayWish = ({ wish, handleDelete, editWish }) => {

    const buttonOpen = useRef(null);
    const modalElement = useRef(null);

    const deleteWish = () => {
        handleDelete(wish._id);
    }

    const handleEdit = (id, wish) => {
        editWish(id, wish);
        modalElement.current.style.display = 'none';
    }

    return (
        <>
            <Card style={{ width: '18rem' }} className="mt-3">
                <Card.Img variant="top" src={wish.imageUrl} className="img_card"/>
                <Card.Body>
                    <Card.Title>{wish.titre}</Card.Title>
                    <Card.Text>{wish.description}</Card.Text>
                    <Card.Text>{wish.prix} EUR</Card.Text>
                    <Button variant="outline-success" href={wish.lienURL}>Voir l'article</Button>
                    <div className="mt-3">
                        <Button size="sm" variant="outline-secondary" ref={buttonOpen}>Modifier</Button>
                        <Button size="sm" variant="outline-danger" onClick={deleteWish}>Supprimer</Button>
                    </div>
                </Card.Body>
            </Card>

            <div id="personModal" ref={modalElement}>
                <EditModal editWish={handleEdit} wish={wish} buttonOpen={buttonOpen} modalElement={modalElement} />
            </div>
        </>

    )
}

export default DisplayWish