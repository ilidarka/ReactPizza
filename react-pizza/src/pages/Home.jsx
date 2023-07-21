import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [currentPage, setcurrentPage] = React.useState(1);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating',
    });

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sort = `&sortBy=${sortType.sortProperty}`;
    const search = searchValue ? `&search=${searchValue}` : '';

    React.useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://648346bef2e76ae1b95c3cc7.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}${search}${sort}&order=desc`,
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    // const pizzas = items
    //     .filter((obj) => {
    //         if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //             {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     })
    //     .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            <div className='content__top'>
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
            <Pagination onChangePage={(number) => setcurrentPage(number)} />
        </>
    );
};

export default Home;
