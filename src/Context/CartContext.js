import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext();

export default function CartContextProvider(props){

    let headers = {
        token : localStorage.getItem("userToken")
    }

    function addToCart(productId){

        
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
            productId : productId
        },
        {
            headers : headers
        }).then((response)=> response)
        .catch((error)=> error);   
    }

    function getLoggedCart() {
        
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
            headers : headers
        }).then((response)=> response)
        .catch((error)=> error);   
    
    }
    function removeProduct(productId) {
        
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
            headers : headers
        }).then((response)=> response)
        .catch((error)=> error);   
    
    }
    function updateCount(productId , count) {
        
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {count}
        ,{
            headers : headers
        }).then((response)=> response)
        .catch((error)=> error);   
    
    }
    function onlinePayment(cartId , url , values) {
        
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        {

            shippingAddress:values
        }
        ,{
            headers : headers
        }).then((response)=> response)
        .catch((error)=> error);   
    
    }

    return <cartContext.Provider value={{addToCart ,onlinePayment , getLoggedCart ,removeProduct ,updateCount}}>

        {props.children}
    </cartContext.Provider>
}