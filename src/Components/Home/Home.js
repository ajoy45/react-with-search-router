import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {
    const [searchText,setSearchText]=useState('');
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchText])
    const searchFood=e=>{
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h1>Search Food By Name</h1>
            <input onChange={searchFood} type='text'placeholder='search by name'></input>
            <h1>Result found:{meals.length}</h1>
            <div className='row'>
                {
                    meals.map(meal=><Meal
                    key={meal.idMeal}
                    meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Home;