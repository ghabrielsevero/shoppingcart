import React, { useRef } from 'react';
import Input from './input';
import * as Yup from  'yup';

import { useSelector } from 'react-redux';
import { Form } from "@unform/web";

export default function FormPagament() {

    const cart = useSelector((state) => state.cart);
    const totalPrice = cart.reduce(( prevVal, elem) => prevVal + elem.product.priceSpecification.maxPrice, 0) ;

    const formRef = useRef(null);

    async function handleSubmit(data, {reset} ){
      try{
        // Remove all previous errors
       const schema = Yup.object().shape({
        'Número do Cartão': Yup.string()
          .max(16, "Número do cartão inválido")
          .min(16, "Número do cartão inválido")
          .required('Este campo é de preencimento obrigatório'),

        'Data de validade': Yup.string()
          .date('Este campo é de preencimento obrigatório'),

        'Códido de Segurança': Yup.string()
          .required('Este campo é de preencimento obrigatório'),  
          
        'Nome Completo': Yup.string()
          .required('Este campo é de preencimento obrigatório '),  
          
        'Data de Nascimento': Yup.string() 
          .required('Este campo é de preencimento obrigatório'),  
            
        'CPF': Yup.string()
          .required('Este campo é de preencimento obrigatório'),

        });
   
      await schema.validate(data, {
        abortEarly: false,

      });
      // Validation passed
      console.log(data);
        formRef.current.setErrors({});
        reset();

      } catch (err) {

        
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {};

      

          err.inner.forEach(error => {
            errorMessages[error.path] = error.message;

            
          });
          
          
          formRef.current.setErrors(errorMessages);
        }
      }
      }
     
    return(

    <div className="App">
              <h1>Dados do cartão </h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <Input type='number' name='Número do Cartão' />
                </div> 
              <div className="form-row">
                <div className="form-group col-lg-6 ">
                  <Input name='Data de validade'  /> 
                </div> 
                <div className="form-group col-lg-6">
                  <Input name='Códido de Segurança ' />
                </div> 
              </div>  


              <h1>Dados pessoais </h1>
              <div className="form-group ">
                 <Input name='Nome Completo' />
                </div> 
              <div className="form-row">
                <div className="form-group col-lg-6 ">
                  <Input name='Data de Nascimento' /> 
                </div> 
                <div className="form-group col-lg-6">
                   <Input name='CPF' />
                </div> 
              </div>  

              <button type='submit' class="btn btn-primary">Finalizar a compra</button>
                </Form>
               </div>
  );
}

