'use client';

import {useState } from 'react';


const CustomerDetail = () => {
    return(
        <form className='max-w-md mx-auto'>
            <div className='w-full'>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-gray-700 font-bold mb-2'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='phone_no'
          className='block text-gray-700 font-bold mb-2'>
          Phone Number
        </label>
        <input
          type='number'
          id='phone_no'
          name='phone_no'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          
        />
      </div>


      <div className='mb-4'>
          <label
            htmlFor='services'
            className='block text-gray-700 font-bold mb-2'>
            Services
          </label>
          <select
            id='services'
            className='block w-full px-4 py-2 mt-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50'>
            <option value={''}>Select Here</option>
            <option value={'airporttransferservice'}>Airport Transfer Service</option>
            <option value='cruiseterminaltransferservice'>Cruise Terminal Transfer Service</option>
            <option value='citytransferservice'>City Transfer Service</option>
          </select>
        </div> 

        <div className='w-full d-flex justify-content'>

        <div className='mb-4 w-50'>
        <label
          htmlFor='pickuplocation'
          className='block text-gray-700 font-bold mb-2'>
          PickUp Location
        </label>
        <input
          type='text'
          id='pickuplocation'
          name='pickuplocation'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      <div className='mb-4 w-50'>
        <label
          htmlFor='dropofflocation'
          className='block text-gray-700 font-bold mb-2'>
          Drop Off Location
        </label>
        <input
          type='text'
          id='dropofflocation'
          name='dropofflocation'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>
      </div>


    













      <div className='mb-6'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none`}
        />
      </div>
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

export default CustomerDetail;
