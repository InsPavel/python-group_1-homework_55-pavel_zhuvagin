import React, { Component } from 'react';
import './App.css';
import Burger from './components/Burger/Burger.js';
import BurgerForm from "./components/BurgerForm/BurgerForm";


const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат', class: 'Salad'},
    {name: 'cheese', price: 20, label: 'Сыр', class: 'Cheese'},
    {name: 'meat', price: 50, label: 'Мясо', class: 'Meat'},
    {name: 'bacon', price: 30, label: 'Бекон', class: 'Bacon'}
];

class App extends Component {
    state = {
        ingredients: [
            {name: 'salad', count: 0, total: 0},
            {name: 'cheese', count: 0, total: 0},
            {name: 'meat', count: 0, total: 0},
            {name: 'bacon', count: 0, total: 0}
        ],
    };

    changeIngredient = (action, name) => {
        let price = availableIngredients.find(item => item.name === name).price;
        let ingredient = this.state.ingredients.find(item => item.name === name);
        if(action === 'more') {
            ingredient.count += 1;
        }
        else if(action === 'less' && (ingredient.count > 0)){
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = [...this.state.ingredients];

        ingredients[name] = ingredient;

        let state = {...this.state};

        state.ingredients = ingredients;
        this.setState(state);
    };

    isButtonDisabled = (ingredient) => {
        let ingredients = this.state.ingredients.find(item => item.name === ingredient);
        return ingredients.count <= 0;
    };


    amountTotal = () => {
        let ingredient = [...this.state.ingredients];
        let totalprice = 20;
        ingredient.map((index) => {
            totalprice += index.total;
        });
        return totalprice;
    };


    render() {
        return (
            <div className="App">
                <Burger
                    ingredients={this.state.ingredients}
                    onIngredients={availableIngredients}
                />
                <div className="Panel">
                    <h3>Общая сумма: {this.amountTotal()} сом</h3>
                        <BurgerForm
                            onIngredients={availableIngredients}
                            onChangeIngridients={this.changeIngredient}
                            onButtonDisabled={this.isButtonDisabled}
                        />
                </div>
            </div>
        );
    }
}

export default App;
