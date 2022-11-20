import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const AddWish = ({ addWish, close }) => {

    const [wish, setWish] = useState({
        titre: "",
        description: "",
        imageUrl: "",
        prix: "",
        lienURL: ""
    })

    const reset = ()=> {
        setWish({
            titre: "",
            description: "",
            imageUrl: "",
            prix: "",
            lienURL: ""
        })
    }

    const handleChange = (e) => {
        setWish({...wish, [e.target.name]:e.target.value })
    }

    const handleValidation = () => {
        addWish(wish);
        reset();
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
                        value={wish.titre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        name="description"
                        class="form-control mt-2"
                        placeholder='Ajouter une description'
                        value={wish.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="imageUrl"
                        class="form-control mt-2"
                        placeholder="Ajouter Url de l'image"
                        value={wish.imageUrl}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="prix"
                        class="form-control mt-2"
                        placeholder="Ajouter un prix"
                        value={wish.prix}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lienURL"
                        class="form-control mt-2"
                        placeholder="Ajouter le lien URL"
                        value={wish.lienURL}
                        onChange={handleChange}
                    />
                </div>
                <div className='mt-3'>
                    <Button 
                        onClick={handleValidation}
                        variant="secondary">Ajouter
                    </Button>
                    <Button 
                        onClick={close}
                        variant="danger">Cancel
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AddWish
