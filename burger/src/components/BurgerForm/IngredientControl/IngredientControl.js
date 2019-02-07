import React from 'react';
import './IngredientControl.css'

function IngredientControl(props){
    return (
        <div className="Control">
            <p>{props.label}</p>
            <p>{props.price} сом</p>
            <button className="Less" type="button" disabled={props.onDisabled()} onClick={props.onRemove}>Less</button>
            <button className="More" type="button" onClick={props.onAdd}>More</button>
        </div>
    )
}

export default IngredientControl;