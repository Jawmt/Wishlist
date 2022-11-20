import React from "react";
import DisplayWish from "../components/DisplayWish";

const WishlistLayout = ({ wishlist, deleteWish, editWish}) => {
    
    const handleDelete = (id) => {
        deleteWish(id);
    }
    
    return (
        <div className="wishlist">
            <h2>liste wish</h2>
            {wishlist && wishlist.map(wish => (
                <DisplayWish editWish={editWish} wish={wish} key={wish._id} handleDelete={handleDelete}/>
            )
            )}
        </div>
    )
};

export default WishlistLayout;
