import React from 'react';
import Trash from '@material-ui/icons/Delete';

export default function ItemCart({item, RemoveItemCart}){
    return(
        <div className="col">
                          <div class="card mb-3">
                            <div class="row no-gutters">
                            {item.product.imageObjects.map((imgProduct) => (
                              <div key={item.id} class="col-md-4">
                                <img src={imgProduct.large} class="card-img" alt="..." style={{width:'80%', margin: '8px'}} />
                              </div>
                            ))}
                              <div class="col">
                                <div class="card-body">
                                  <h5 class="card-title">{item.product.name}</h5>
                                  <p class="card-text">{item.product.priceSpecification.maxPrice}</p>
                                  <buttom onClick={() => RemoveItemCart(item.product.sku)} className="btn btn-danger" style={{ position: 'absolute', right: '5%',bottom: '12px'}}> 
                                      <Trash/>
                                  </buttom>
                                </div>
                              </div>
                          </div>
                        </div>
                        </div>
    )
}