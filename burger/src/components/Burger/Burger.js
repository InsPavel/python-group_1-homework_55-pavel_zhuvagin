import React from 'react';
import Ingredient from "./Ingredient/Ingredient";


function Burger(props) {
    const {salad, meat, cheese, bacon} = props.ingredients;

    let ingredients = [];
    for (let i = 0; i < salad.count; i++) ingredients.push(<Ingredient class={props.onIngredients[0].class}/>);
    for (let i = 0; i < cheese.count; i++) ingredients.push(<Ingredient class={props.onIngredients[1].class}/>);
    for (let i = 0; i < meat.count; i++) ingredients.push(<Ingredient class={props.onIngredients[2].class}/>);
    for (let i = 0; i < bacon.count; i++) ingredients.push(<Ingredient class={props.onIngredients[3].class}/>);

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