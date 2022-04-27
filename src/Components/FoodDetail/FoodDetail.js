import React from 'react';

const FoodDetail = (props) => {
    const{strArea,strMealThumb,strIngredient3,strMeasure1,strMeasure2}=props.foodDetail;
    return (
        <div>
            <img className='w-25 mt-4' src={strMealThumb}alt=''></img>
            <h1>Name:{strArea}</h1>
            <h2>Made by goods:{strIngredient3}</h2>
            <h2>Measurement:{strMeasure1}</h2>
            <h2>Weight:{strMeasure2}</h2>
        </div>
    );
};

export default FoodDetail;