import React, { useState } from "react";

const EditWish = ({ wish, close, editWish}) => {
    
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
                        placeholder='Ajouter un titre'
                        value={wishForm.titre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        name="description"
                        placeholder='Ajouter une description'
                        value={wishForm.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Ajouter Url de l'image"
                        value={wishForm.imageUrl}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="prix"
                        placeholder="Ajouter un prix"
                        value={wishForm.prix}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lienURL"
                        placeholder="Ajouter le lien URL"
                        value={wishForm.lienURL}
                        onChange={handleChange}
                    />
                </div>

                <button onClick={handleModification}>Valider la modification</button>
                <button onClick={close}>Cancel</button>
            </div>
            
        </>);
};

export default EditWish;
