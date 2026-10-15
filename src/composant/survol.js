import React, {useState} from 'react';

const Survol = ({couleur}) => {
    const [color, setColor] = useState(couleur);

    const changeColor = () => {
        const newColor = color === 'red' ? 'blue' : 'red';
        setColor(newColor);
    };
    // onMouseEnter quand on entre dans la div; onClick quand on click
    return (
        <div>
            <div style={{ color }}>
                Un composant
            </div>
            <button onMouseEnter ={changeColor}>Changer quelque chose</button> 
        </div>
    );
};

export default Survol;


