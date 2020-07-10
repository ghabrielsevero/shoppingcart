import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product';

import {     getAllProducts } from '../../store/fetchActions';
import { addItem } from '../../store/ducks/cart';
import { addMessage } from '../../store/ducks/layout';
 

export default function ListProducts() {
   
    const products = useSelector( (state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    },[ dispatch ])


    function addItemProduct(product){
        dispatch(addItem(product));      
        
        dispatch(addMessage(`Item adicionado com sucesso!!!`));
    }
    

        return(
            <div className="container m-20" style={{marginTop: '20px'}}  >

             <h1>Lista de Produtos</h1>
               <div className="row">
                   {products.map((product,index) => <Product key={index} product={product} addItemProduct={addItemProduct}/>)}
               </div> 

       
        
        </div>    
        )
};