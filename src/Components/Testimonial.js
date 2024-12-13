import React, { useState } from 'react'
import Card  from './Card';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";


const Testimonial = (props) => {
    let reviews = props.reviews;

    const[index,setindex] = useState(0);


    function leftShiftHandler() {
        if(index - 1 < 0){
            setindex(reviews.length - 1);
        }
        else{
            setindex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >= reviews.length){
            setindex(0);
        }
        else{
            setindex(index + 1);
        }
    }

    function supriseHandler() {
        //index random me decimal mil sakat 
        //so we have used floor concept  
       let randomIndex =  Math.floor(Math.random() * reviews.length);
       setindex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card reviews = {reviews[index]}/>

        <div className='flex text-3xl mt-10 gap-3 font-bold text-violet-400 items-center justify-center'>

            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:bg-violet-500'>
            <FiChevronLeft/>
            </button>

            <button
            onClick={rightShiftHandler} 
            className='cursor-pointer hover:bg-violet-500'>
            <FiChevronRight/>
            </button>

        </div>

        <div className='mt-6'>
            <button 
            onClick={supriseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
            px-10 py-2 cursor-pointer rounded-md font-bold text-white text-lg'>
            Surpise Me
            </button>
        </div>

    </div>
  )
}


export default Testimonial;