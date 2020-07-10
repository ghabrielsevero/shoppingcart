import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Components/Header';
import ItemCart from '../../Components/ItemCart';

import CreditCard from '@material-ui/icons/CreditCard';


import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart'
import { addMessage } from '../../store/ducks/layout';
 

export default function Cart() {
 
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    function RemoveItemCart(sku){
      dispatch(removeItem(sku));

      dispatch( addMessage ("Item removido com sucesso"));
    }

    const totalPrice = cart.reduce(( prevVal, elem) => prevVal + elem.product.priceSpecification.maxPrice, 0) ;
    const discount = cart.reduce(( prevVal, elem) => prevVal + elem.product.priceSpecification.discount, 0) ;



    return(

    <div className="App">
                <Header />
            <div className='container' style={{marginTop: '20px'}} >
                  {cart.length === 0 ?( <p className= 'col-sm-12 m-5 text-warning text-center'>Sem produtos no Carrinho... </p>
                  ) : (
                    <div className="row">
                <div className="col">
                 <h1>Carrinho</h1> 
                    <React.Fragment>
                        {cart.map (item => (<ItemCart key={item.product.sku} item={item} RemoveItemCart={RemoveItemCart} />))}
                    </React.Fragment>
                </div>
                <div className="col" style={{margin: '40px 0 0 40px'}}>
                <h3>Detalhes do preço</h3> 
                  <div className= "row" >
                    <div className= "col" >
                      <p className="amount" style={{margin: '10px 0'}} >Valor dos produtos</p>
                    </div>
                    <div className= "col">
                      <h5> R$ {totalPrice} </h5>    
                    </div>    
                  </div> 

                  <div className= "row" >
                    <div className= "col" >
                      <p className="amount" style={{margin: '10px 0'}} >Desconto</p>
                    </div>
                    <div className= "col">
                      <h5> R$ { discount } </h5>    
                    </div>    
                  </div> 

                  <div className= "row" >
                    <div className= "col" >
                      <p className="amount" style={{margin: '10px 0'}} >Valor a pagar </p>
                    </div>
                    <div className= "col">
                      <h3> R$ { totalPrice - discount } </h3>    
                    </div>    
                  </div>   
  

                  
                  <NavLink to='/pagament' >   
                    <buttom className="btn btn-primary" totalPrice={totalPrice} style={{marginTop: "40px", alingContent: "right" }} > 
                      <CreditCard/> Finalizar a compra 
                    </buttom>         
                  </NavLink>      
                </div>
              </div>
                 )}
            </div>
             
    </div>
  );
}

