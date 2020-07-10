import apiProducts from "../../services/apiProducts";
import { addProducts } from "../ducks/products";

export const getAllProducts = () =>{
    return dispath => {
        apiProducts
            .get('/')
                .then((res) => {
                    dispath(addProducts(res.data.items))
                })
                .catch(console.log());
                
                
    };
};