'use client';

import {useState } from 'react';




const categoryForm = () => {
const [data,setData]=useState({
  category:"",
  subcategory:"",
  passengers:"",
  luggage:"",
  price:"",
  extraservice:"",
  image:""
});

const {category,subcategory,passengers,luggage,price,extraservice,image} = data;


const handleChange=(e)=>{
  const {name,value} = e.target;
  setData({...data,[name]:value});
}

const handleSubmit=async(e)=>{
  e.preventDefault();
 
    try {
      const req = await fetch('http://localhost:3000/api',{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          'Content-Type':"application/json"
        }
      })

      if(!req.ok){
        alert("Wrong")
      }

      const res = await req.json();
      console.log(res);

    } catch (err) {
      console.error(err);
    }

}

    return(
        <form className='max-w-md mx-auto' onSubmit={(e)=>handleSubmit(e)}>
            <div className='w-full'>
                {/* Category Name */}
      <div className='mb-4'>
        <label
          htmlFor='category'
          className='block text-gray-700 font-bold mb-2'>
          Category Name :
        </label>
        <input
          type='text'
          id='category'
          name='category'
          value={category}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}/>
      </div>

      {/* Sub Category Name */}
      <div className='mb-4'>
        <label
          htmlFor='subcategory'
          className='block text-gray-700 font-bold mb-2'>
          Types Of Vechiles :
        </label>
        <input
          type='text'
          id='subcategory'
          name='subcategory'
          value={subcategory}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}/>
      </div>

      <div className='m-4 texxt-gray-700 font-bold'>
        <p>Vecile Details</p>
      </div>


      {/* Passengers */}
      <div className='mb-4'>
        <label
          htmlFor='passengers'
          className='block text-gray-700 font-bold mb-2'>
          Passengers
        </label>
        <input
          type='number'
          id='passengers'
          name='passengers'
          value={passengers}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          
        />
      </div>

      {/* Luggage */}
      <div className='mb-4'>
        <label htmlFor='luggage' className='block text-gray-700 font-bold mb-2'>
          Luggage
        </label>
        <input
          type='text'
          id='luggage'
          name='luggage'
          value={luggage}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          
        />
      </div>

      {/* Price */}
        <div className='mb-4'>
        <label
          htmlFor='price'
          className='block text-gray-700 font-bold mb-2'>
          Price
        </label>
        <input
          type='number'
          id='price'
          name='price'
          value={price}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      {/* Extra Services */}
      <div className='mb-4'>
        <label
          htmlFor='extraservice'
          className='block text-gray-700 font-bold mb-2'>
          Extra Service :
        </label>
        <input
          type='text'
          id='extraservice'
          name='extraservice'
          value={extraservice}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>
      
      {/* Image */}
      <div className='mb-4'>
        <label htmlFor='image' className='block text-gray-700 font-bold mb-2'>
          Image URL: 
        </label>
        <input
          type='url'
          id='image'
          name='image'
          value={image}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      {/* Child Seat */}
      <div className='mb-4'>
          <label
            htmlFor='childseat'
            className='block text-gray-700 font-bold mb-2'>
            Child Seat
          </label>
          <input
            type='radio'
            id='childseat'
            // value={child}
            name='childseat'
            onChange={(e)=>handleChange(e)}
            className='appearance-none border rounded-full w-5 h-5 mr-2 checked:bg-blue-500 checked:border-transparent focus:outline-none'/>
          <label htmlFor='yes' className='text-gray-700'>
            Yes
          </label>

          <input
            type='radio'
            id='childseat'
            // value={child}
            name='childseat'
            onChange={(e)=>handleChange(e)}
            className='appearance-none border rounded-full w-5 h-5 mr-2  checked:bg-blue-500 checked:border-transparent focus:outline-none'/>
          <label htmlFor='no' className='text-gray-700'>
            No
          </label>
        </div>

        {/* Booster Seat */}
        <div className='mb-4'>
          <label
            htmlFor='boosterseat'
            className='block text-gray-700 font-bold mb-2'>
            Booster Seat
          </label>
          <input
            type='radio'
            id='boosterseat'
            // value={boosterseat}
            name='boosterseat'
            onChange={(e)=>handleChange(e)}
            className='appearance-none border rounded-full w-5 h-5 mr-2 checked:bg-blue-500 checked:border-transparent focus:outline-none'/>
          <label htmlFor='boosterseat' className='text-gray-700'>
            Yes
          </label>

          <input
            type='radio'
            id='boosterseat'
            // value={boosterseat}
            name='boosterseat'
            onChange={(e)=>handleChange(e)}
            className='appearance-none border rounded-full w-5 h-5 mr-2  checked:bg-blue-500 checked:border-transparent focus:outline-none'/>
          <label htmlFor='boosterseat' className='text-gray-700'>
            No
          </label>
        </div>

        {/* Notes */}
        <div className='mb-4'>
        <label
          htmlFor='notes'
          className='block text-gray-700 font-bold mb-2'>
          Notes
        </label>
        <input
          type='textarea'
          id='notes'
          name='notes'
          // value={notes}
          onChange={(e)=>handleChange(e)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

        {/* Submit */}
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          className='bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Submit
        </button>
      </div>

    </div>
    </form>

    )

}

export default categoryForm;
