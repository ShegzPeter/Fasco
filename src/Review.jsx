import React , { useState } from 'react'
import axios from 'axios';

const Review = ({ fetchReviews }) => {


    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('quantity', quantity);
      formData.append('price', price);
      if (image) formData.append('image', image);
  
      try {
        await axios.post('http://localhost:8000/reviews', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setName('');
        setImage(null);
        fetchReviews(); // Reload reviews after submission
      } catch (err) {
        console.error(err.message);
      }
    };
  return (
    <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="">Review:</label>
      <textarea
        placeholder="Write your review..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
        required
      />
        <label htmlFor="">Name:</label>
      <input
        placeholder="Write your name"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border p-2"
        required
      />
      <label htmlFor="">Role:</label>
    <input
        placeholder="Write your role"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2"
        required
      />
      <label htmlFor="">Photo:</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit Review
      </button>
    </form>
    </div>
  )
}

export default Review