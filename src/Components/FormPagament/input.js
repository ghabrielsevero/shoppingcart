import React, { useEffect, useRef } from "react";
import { useField } from '@unform/core';


export default function Input({name, ...rest}){
    const inputRef = useRef(null)
    const {fieldName, registerField, defaultValue, error} = useField(name);

    useEffect( () => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField] );

    return(

            <div class="form-group lg-12 fx">
                <label for="exampleInputEmail1">{name}</label>
                <input class="form-control" aria-describedby="emailHelp" ref={inputRef} {...rest} />
                {error && <small id="emailHelp" class="form-text text-muted" style={{color:"#f00"}}>{error}</small>}
            </div>
    );
}