import react from "react";
import apiProducts from  './apiProducts';

export const getProducts = async (page = 1) => {
    const response =  await apiProducts.get(`/`);

    const { items, ...productInfo } = response.data.items;

    
}




export default GetProducts(productInfo);