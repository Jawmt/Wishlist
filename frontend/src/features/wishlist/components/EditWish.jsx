import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const EditWish = ({ wish, close, editWish }) => {

    const [wishForm, setWish] = useState({
        titre: wish.titre,
        description: wish.description,
        imageUrl: wish.imageUrl,
        prix: wish.prix,
        lienURL: wish.lienURL
    })

    const handleChange = (e) => {
        setWish({ ...wishForm, [e.target.name]: e.target.value })
    }


    const handleModification = () => {
        editWish(wish._id, wishForm);
    }

    return (
        <>
            <div >
                <div>
                    <input
                        type="text"
                        name="titre"
                        class="form-control"
                        placeholder='Ajouter un titre'
                        value={wishForm.titre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        name="description"
                        class="form-control mt-2"
                        placeholder='Ajouter une description'
                        value={wishForm.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="imageUrl"
                        class="form-control mt-2"
                        placeholder="Ajouter Url de l'image"
                        value={wishForm.imageUrl}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="prix"
                        class="form-control mt-2"
                        placeholder="Ajouter un prix"
                        value={wishForm.prix}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lienURL"
                        class="form-control mt-2"
                        placeholder="Ajouter le lien URL"
                        value={wishForm.lienURL}
                        onChange={handleChange}
                    />
                </div>

                <Button
                    onClick={handleModification}
                    variant="secondary"
                >Valider la modification</Button>
                <Button
                    onClick={close}
                    variant="danger"
                    >Cancel
                </Button>
            </div>

        </>);
};

export default EditWish;
