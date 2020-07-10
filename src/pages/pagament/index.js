import React, { useRef } from 'react';
import Header from '../../Components/Header';
import FormPagament from '../../Components/FormPagament';

import CreditCardIcon from "@material-ui/icons/CreditCard";

import { useSelector } from 'react-redux';

export default function Pagament() {

    const cart = useSelector((state) => state.cart);
    const totalPrice = cart.reduce(( prevVal, elem) => prevVal + elem.product.priceSpecification.maxPrice, 0) ;

   
    return(

    <div className="App">
                <Header />
                <div className="container-lg" style={{marginTop: '20px'}}>
                <div className="row">
                  <div className="col">
                   <FormPagament styte={{ width:100 }}/>
                  </div>
                  <div className="col">
                    <h1>
                      Dados da compra 
                    </h1>
                    

                  <div className="container justify-content-center"> 
                  <div>
                    <p>Quantidade de Produtos</p>
                    <h5>{cart.length}</h5>
                  </div>  
                  <div >
                    <p>Forma de pagamento</p>
                  <div className="row">
                    <div className="ml-3">
                    <CreditCardIcon />
                    </div>
                    <h5 className="ml-3">Cartão de Credito</h5>
                  </div>  
                  </div>  

                  <div className="row-m-0" style={{marginTop:50}}>
                  <div >
                    <p>Valor à Pagar</p>
                    <h3>{totalPrice}</h3>
                  </div>
                  </div>
                  </div>  

                  </div>
                </div>
              </div>
                
    </div>  
               
  );
}

