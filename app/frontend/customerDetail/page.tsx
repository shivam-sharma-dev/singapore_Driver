'use client';

import {useState } from 'react';


const CustomerDetail = () => {
    return(
        <form className='max-w-md mx-auto'>
            <div className='w-full'>
              {/* Name */}
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

      {/* Phone Number */}
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

      {/* Email */}
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

      {/* Services */}
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
          
          {/* Pick Up Location */}
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

      {/* Drop Off Location */}
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


      <div className='d-flex justify-between'>

        {/* NO. Pax */}
      <div className='mb-4'>
        <label
          htmlFor='numberpax'
          className='block text-gray-700 font-bold mb-2'>
          No. Pax
        </label>
        <input
          type='number'
          id='numberpax'
          name='numberpax'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      {/* Flight Details */}
      <div className='mb-4'>
        <label
          htmlFor='flightdetails'
          className='block text-gray-700 font-bold mb-2'>
          Flight Details
        </label>
        <input
          type='text'
          id='flightdetails'
          name='flightdetails'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      {/* Number Of Luggage */}
      <div className='mb-4'>
        <label
          htmlFor='numberofluggage'
          className='block text-gray-700 font-bold mb-2'>
          No. Of Luggage
        </label>
        <input
          type='number'
          id='numberofluggage'
          name='numberofluggage'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      </div>

      {/* Type Of Services */}
      <div className='mb-4'>
          <label
            htmlFor='typeofservice'
            className='block text-gray-700 font-bold mb-2'>
            Type Of Service
          </label>
          <input
            type='radio'
            id='transferonly'
            value={'transferonly'}
            className='appearance-none border rounded-full w-5 h-5 mr-2 checked:bg-blue-500 checked:border-transparent focus:outline-none'/>
          <label htmlFor='transferonly' className='text-gray-700'>
            Transfer Only
          </label>
          <input
            type='radio'
            id='hourlybooking'
            value={'hourlybooking'}
            className='appearance-none border rounded-full w-5 h-5 mr-2  checked:bg-blue-500 checked:border-transparent focus:outline-none'/>
          <label htmlFor='hourlybooking' className='text-gray-700'>
            Hourly Booking
          </label>
        </div>

      <div className='d-flex justify-between'>

        {/* Date Of Transport */}
      <div className='mb-4'>
        <label
          htmlFor='dateoftransport'
          className='block text-gray-700 font-bold mb-2'>
          Date of transport
        </label>
        <input
          type='number'
          id='dateoftransport'
          name='dateoftransport'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      {/* Time */}
      <div className='mb-4'>
        <label
          htmlFor='time'
          className='block text-gray-700 font-bold mb-2'>
          Time
        </label>
        <input
          type='number'
          id='time'
          name='time'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
      </div>

      </div>

      {/* Message */}
      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none`}
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

export default CustomerDetail;
