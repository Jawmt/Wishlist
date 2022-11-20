import React from 'react'
import { useState } from 'react';

const AddWish = ({ addWish, close }) => {

    const [wish, setWish] = useState({
        titre: "",
        description: "",
        imageUrl: "",
        prix: "",
        lienURL: ""
    })

    const handleChange = (e) => {
        setWish({...wish, [e.target.name]:e.target.value })
    }

    const handleValidation = () => {
        addWish(wish);
    }

    return (
        <>
            <div >
                <div>
                    <input
                        type="text"
                        name="titre"
                        placeholder='Ajouter un titre'
                        value={wish.titre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        name="description"
                        placeholder='Ajouter une description'
                        value={wish.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Ajouter Url de l'image"
                        value={wish.imageUrl}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="prix"
                        placeholder="Ajouter un prix"
                        value={wish.prix}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lienURL"
                        placeholder="Ajouter le lien URL"
                        value={wish.lienURL}
                        onChange={handleChange}
                    />
                </div>
                
                <button onClick={handleValidation}>Ajouter</button>
                <button onClick={close}>Cancel</button>
            </div>
        </>
    )
}

export default AddWish
