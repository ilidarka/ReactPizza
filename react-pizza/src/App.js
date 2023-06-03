import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
    return (
        <div class='wrapper'>
            <div className='block1'>
                <ul className='text2'>
                    <li className='hello3'>Test info</li>
                    <li className='hello3'>Test info2</li>
                    <li className='hello3'>Test info3</li>
                    <li className='hello3'>Test info4</li>
                </ul>
            </div>
            <Header />
            <div class='content'>
                <div class='container'>
                    <div class='content__top'>
                        <Categories />
                        <Sort />
                    </div>
                    <h2 class='content__title'>Все пиццы</h2>
                    <div class='content__items'>
                        <PizzaBlock title='Мексиканская' price={500} />
                        <PizzaBlock title='Бургер-пицца' price={300} />
                        <PizzaBlock title='Маргарита' price={400} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
