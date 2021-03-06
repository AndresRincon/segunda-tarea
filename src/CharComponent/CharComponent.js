import React from 'react';

const charList = (prop) => {
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }
    return <div style={style} onClick={prop.delet}>{prop.letra}</div>
}

export default charList;