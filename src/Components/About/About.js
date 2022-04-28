import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodDetail from '../FoodDetail/FoodDetail';

const About = () => {
    const {foodId} = useParams();
    const [foodDetails,setFoodDetails]=useState([]);
    //  console.log(foodDetails)
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFoodDetails(data.meals))
    },[foodId])
    return (
        <div>
            {
                foodDetails.map(foodDetail=><FoodDetail
                key={foodDetail.idMeal}
                foodDetail={foodDetail}
                ></FoodDetail>)
            }
        </div>
    );
};

export default About;