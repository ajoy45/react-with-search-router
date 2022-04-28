import React from 'react';
import { useNavigate } from "react-router-dom";

const Meal = (props) => {
    const{strMealThumb,strArea,strInstructions,idMeal}=props.meal;
    let navigate = useNavigate();
    const showFoodDetails=()=>{
       navigate(`about/${idMeal}`)
    }
    return (
        <div className='col-md-4 col-sm-6 border border-primary  gy-3'>
            <img className='w-50' src={strMealThumb}alt=''></img>
            <h1>{strArea}</h1>
            <p>{strInstructions.slice(0,200)}</p>
            <button onClick={showFoodDetails} className='w-100 border-0 p-3 bg-primary text-white fs-2'>Food Details</button>
        </div>
    );
};

export default Meal;