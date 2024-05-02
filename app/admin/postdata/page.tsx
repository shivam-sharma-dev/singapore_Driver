'use client';
import axios from 'axios';
import { useState } from 'react';


const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [subcategories, setSubcategories] = useState([
    { name: '', details: { img: '', passengers: '', luggage: '', price: '', extraServices: [] , childseat: '' , boosterseat: '' , flightnumber: '' , notes: ''} }
  ]);

  const handleSubcategoryChange = (index, field, value) => {
    const updatedSubcategories = [...subcategories];
    updatedSubcategories[index].name = value;
    updatedSubcategories[index].details[field] = value;
    setSubcategories(updatedSubcategories);
  };

  const handleAddSubcategory = () => {
    setSubcategories([
      ...subcategories,
      { name: '', details: { img: '', passengers: '', luggage: '', price: '', extraServices: [] , childseat: '', boosterseat: '' , flightnumber:'' , notes:'' } }
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: categoryName,
        subcategories: subcategories.map(subcategory => ({
          name: subcategory.name,
          details: {
            img: subcategory.details.img,
            passengers: subcategory.details.passengers,
            luggage: subcategory.details.luggage,
            price: subcategory.details.price,
            extraServices: subcategory.details.extraServices,
            childseat:subcategory.details.childseat,
            boosterseat:subcategory.details.boosterseat,
            flightnumber:subcategory.details.flightnumber,
            notes:subcategory.details.notes
          }
        }))
      };
    //   console.log(payload);


      // Assuming your backend server is running on http://localhost:3000
      const response = await axios.post('http://localhost:3000/api/categories', payload);
      console.log('Data posted successfully:', response.data);

      // Reset form fields after successful submission
      setCategoryName('');
      setSubcategories([{ name: '', details: { img: '', passengers: '', luggage: '', price: '', extraServices: [] , childseat: '', boosterseat: '' , flightnumber:'' , notes:'' } }]);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </label>
        <br />

        {subcategories.map((subcategory, index) => (
          <div key={index}>
            <h3>Subcategory {index + 1}</h3>
            <label>
              Subcategory Name:
              <input
                type="text"
                value={subcategory.name}
                onChange={(e) =>  
                    handleSubcategoryChange(index, 'name', e.target.value)
                }
                required
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="text"
                value={subcategory.details.img}
                onChange={(e) => handleSubcategoryChange(index, 'img', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Number of Passengers:
              <input
                type="number"
                value={subcategory.details.passengers}
                onChange={(e) => handleSubcategoryChange(index, 'passengers', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Luggage Capacity:
              <input
                type="text"
                value={subcategory.details.luggage}
                onChange={(e) => handleSubcategoryChange(index, 'luggage', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                value={subcategory.details.price}
                onChange={(e) => handleSubcategoryChange(index, 'price', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Extra Services (comma-separated):
              <input
                type="text"
                value={subcategory.details.extraServices.join(',')}
                onChange={(e) => handleSubcategoryChange(index, 'extraServices', e.target.value.split(','))}
                required
              />
            </label>
            <br />
            <label>
              Child Seat: 
              <label>
                Yes
              <input
                type="checkbox"
                value={subcategory.details.childseat}
                onChange={(e) => handleSubcategoryChange(index, 'childseat', e.target.value)}
                required
              />
              </label>
              <label>
                No
              <input
                type="checkbox"
                value={subcategory.details.childseat}
                onChange={(e) => handleSubcategoryChange(index, 'childseat', e.target.value)}
                required
              />
              </label>
            </label>
            <br />

            <label>
              Booster Seat: 
              <label>
                Yes
              <input
                type="checkbox"
                value={subcategory.details.boosterseat}
                onChange={(e) => handleSubcategoryChange(index, 'boosterseat', e.target.value)}
                required
              />
              </label>
              <label>
                No
              <input
                type="checkbox"
                value={subcategory.details.boosterseat}
                onChange={(e) => handleSubcategoryChange(index, 'boosterseat', e.target.value)}
                required
              />
              </label>
            </label>


            <br />
            <label>
              Flight Number: 
              <label>
                Yes
              <input
                type="checkbox"
                value={subcategory.details.flightnumber}
                onChange={(e) => handleSubcategoryChange(index, 'flightnumber', e.target.value)}
                required
              />
              </label>
              <label>
                No
              <input
                type="checkbox"
                value={subcategory.details.flightnumber}
                onChange={(e) => handleSubcategoryChange(index, 'flightnumber', e.target.value)}
                required
              />
              </label>
            </label>
            <br />
            <label>
              Notes:
              <input className='h-20'
                type="textarea"
                value={subcategory.details.notes}
                onChange={(e) => handleSubcategoryChange(index, 'notes', e.target.value)}
                required
              />
            </label>
            <br />
          </div>
        ))}

        <button type="button" onClick={handleAddSubcategory}>
          Add Subcategory
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CategoryForm;
