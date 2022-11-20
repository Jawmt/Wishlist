import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import WishlistLayout from '../features/wishlist/layouts/WishlistLayout';
import { addWishService, deleteWishService, getWishlistService, modifyWishService } from '../services/wishlistService';
import '../App.css';
import Modal from '../features/wishlist/components/Modal';

const Home = () => {
    const [wishlist, setWishlist] = useState([]);
    const buttonOpen = useRef(null);
    const modalElement = useRef(null);

    useEffect(() => {
        getWishlistFromApi();
    }, []);

    const getWishlistFromApi = () => {
        getWishlistService().then(result => setWishlist(result));
    }

    const deleteWish = (id) => {
        deleteWishService(id).then(() => getWishlistFromApi());
    }

    const addWish = (wish) => {
        addWishService(wish).then(()=> getWishlistFromApi());
        modalElement.current.style.display = 'none';
    }

    const editWish = (id, wish) => {
        modifyWishService(id, wish).then(() => getWishlistFromApi());;
    }

    return (
        <>
            
            <div className="home">
                <div>
                    <Button ref={buttonOpen}  variant="dark" className="mt-3">Ajouter un wish</Button>
                </div>
                <div id="personModal" ref={modalElement}>
                    <Modal addWish={addWish} buttonOpen={buttonOpen} modalElement={modalElement} />
                </div>
                <WishlistLayout editWish={editWish} wishlist={wishlist} deleteWish={deleteWish} />
            </div>
        </>

    )
}

export default Home