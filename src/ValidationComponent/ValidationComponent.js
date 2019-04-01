import React from 'react';

const ValidationComponent = (prop) => {
    let mensaje = 'Texto muy corto';
    if(prop.long >= 5 ){
        mensaje = "Texto lo suficientemente largo";
    }
    return <p>{mensaje}</p>;
};

export default ValidationComponent;