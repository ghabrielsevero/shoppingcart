import React from "react";
import './style.css'
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {useSelector} from 'react-redux';


export default function Header(){

  const length = useSelector(state => state.cart.length);


    

 return (

   <header id="main-header">
    <Container>    
        <Row>
        <Col  >
          <Button className="buttonHeader" variant="text" href='/' >Home</Button>
        </Col>
        <Col>Loginha do Seu Zé</Col>
        <Col className="buttonPages">
        <Button className="buttonHeader" variant="text" >Home</Button>
        
        <NavLink to='/shoppingcart'>   
          <Button className="buttonHeader"startIcon={<ShoppingCartIcon />}  underline="houver">Carrinho <p>{length}</p></Button>
        </NavLink>
          
        </Col>
      </Row>
    </Container>
  </header>
  ) 
      } 
      
