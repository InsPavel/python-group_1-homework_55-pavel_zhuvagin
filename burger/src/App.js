import React, { Component } from 'react';
import './App.css';

const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат', class: 'Salad'},
    {name: 'cheese', price: 20, label: 'Сыр', class: 'Cheese'},
    {name: 'meat', price: 50, label: 'Мясо', class: 'Meat'},
    {name: 'bacon', price: 30, label: 'Бекон', class: 'Bacon'}
];

class App extends Component {
    state = {
        ingredients: {
            salad: {count: 0, total: 0},
            cheese: {count: 0, total: 0},
            meat: {count: 0, total: 0},
            bacon: {count: 0, total: 0}
        },
    };
    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
