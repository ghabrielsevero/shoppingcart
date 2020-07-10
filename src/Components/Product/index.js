import React from 'react';
import {Button, Card} from 'react-bootstrap';


export default function Product({ product, addItemProduct }) {

	return (
		    <div>
                 
            <Card style={{ width: '20rem', height: '32rem', margin: '8px' }} key={product.product.sku}>
                {product.product.imageObjects.map((imgProduct) =>
                <Card.Img style={{width: '90%'}} variant="top" key={product.sku} id="teste" src={imgProduct.large} />
                    )} 
                    <Card.Body>
                        <Card.Title >{product.product.name}</Card.Title>
                            <Card.Text style={{ position: 'absolute', right: '5%',bottom: '60px', fontSize:'20px' }}>
                                R$ {product.product.priceSpecification.maxPrice} 
                            </Card.Text>
                        <Button style={{ position: 'absolute', left: '5%',bottom: '20px'}} variant="primary" onClick={() => addItemProduct(product)}>Adicionar ao Carrinho</Button>
                    </Card.Body>
            </Card>
            </div> 
	);
}