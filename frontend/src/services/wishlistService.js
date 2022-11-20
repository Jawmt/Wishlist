

export const getWishlistService = () => {
    return fetch(`/wishlist`)
        .then(result => result.json())
        .catch(error => console.log(error))
}

export const addWishService = (wish) => {
    return (
        fetch('/wishlist', {
            method:"POST",
            body: JSON.stringify(wish),
            headers:{"Content-type":"application/json"}
        })
            .then((result) => result.json())
            .catch((err)=> console.error(err))
    )
}

export const deleteWishService = (id) => {
    return (
        fetch(`/wishlist/${id}`,{
            method:"DELETE"})
            .then((res)=> res.json())
            .catch((err)=>console.log(err))
    )
}

export const modifyWishService = (id, wish) => {
    return fetch(`wishlist/${id}`,{
        method:"PUT",
        body:JSON.stringify(wish),
        headers: {"Content-Type": "application/json"}
    })
        .then((res)=> res.json())
        .catch((err) => console.log(err))
}



