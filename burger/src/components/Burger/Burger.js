import React from 'react';
import Ingredient from "./Ingredient/Ingredient";


function Burger(props) {
    let ingredients = [];
    for (let i = 0; i < props.ingredients.length; i++) {
        let ingredient = props.ingredients[i];
        for (let c = 0; c < ingredient.count; c++) {
            ingredients.push(<Ingredient class={props.onIngredients[i].class}/>)
        }
    }

    return <div className="Burger">
        <div className="BreadTop">
            <div className="Seeds1"/>
            <div className="Seeds2"/>
        </div>
        {ingredients}
        <div className="BreadBottom"/>
    </div>
}


export default Burger