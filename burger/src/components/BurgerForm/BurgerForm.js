import React from 'react';
import IngredientControl from './IngredientControl/IngredientControl.js'

function BurgerForm(props) {
    return (
        <div className='form-style'>
            <form>
                {props.onIngredients.map((ingredient) =>{
                    return <IngredientControl
                        label={ingredient.label}
                        price={ingredient.price}
                        onAdd={() => props.onChangeIngridients('more', ingredient.name)}
                        onRemove={() => props.onChangeIngridients('less', ingredient.name)}
                        onDisabled={() => props.onButtonDisabled(ingredient.name)}
                        />
                    })
                }
            </form>
        </div>
    )
}

export default BurgerForm;