import React from 'react';


const ImageButton = (props) => (
    <button className="iconButton">
        <img draggable={false} src={`icons/${props.icon}.png`} alt="props.label"/>
    </button>
);

export default ImageButton;