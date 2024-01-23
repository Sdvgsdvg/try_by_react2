import React, { useState } from 'react';
import { addNewProduct } from '../store';


const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    price: '',
    count: '',
    rate: ''
  });
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (productData.title.trim() === "") {
      newErrors.title = "Title cannot be empty";
    }
    if (productData.category.trim() === "") {
      newErrors.category = "Category cannot be empty";
    }
    if (productData.description.trim() === "") {
      newErrors.description = "Description cannot be empty";
    }
    if (productData.image.trim() === "") {
      newErrors.image = "Image URL cannot be empty";
    }
    if (isNaN(productData.price) || productData.price <= 0) {
      newErrors.price = "Price should be a positive number";
    }
    if (isNaN(productData.count) || productData.count <= 0) {
      newErrors.count = "Count should be a positive number";
    }
    if (isNaN(productData.rate) || productData.rate <= 0) {
      newErrors.rate = "Rate should be a positive number";
    }

    setErrors(newErrors);

    if (JSON.stringify(newErrors) === "{}") {
      console.log('Product data:', productData);
      setProductData({
        title: '',
        category: '',
        description: '',
        image: '',
        price: '',
        count: '',
        rate: ''
      });
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <>
    <center>
    <br></br>
    <br></br>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label><br></br>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="form-input"
          /><br></br><br></br>
          {errors.title && <p className="form-error">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category:
          </label><br></br>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="form-input"
          /><br></br><br></br>
          {errors.category && <p className="form-error">{errors.category}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description:
          </label><br></br>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="form-input"
          ></textarea><br></br><br></br>
          {errors.description && <p className="form-error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image:
          </label><br></br>
          <input
            type="text"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleChange}
            className="form-input"
          /><br></br>
          {errors.image && <p className="form-error">{errors.image}</p>}
        </div><br></br>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price:
          </label><br></br>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="form-input"
          /><br></br><br></br>
          {errors.price && <p className="form-error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="count" className="form-label">
            Count:
          </label><br></br>
          <input
            type="number"
            id="count"
            name="count"
            value={productData.count}
            onChange={handleChange}
            className="form-input"
          /><br></br><br></br>
          {errors.count && <p className="form-error">{errors.count}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="rate" className="form-label">
            Rate:
          </label><br></br>
          <input
            type="number"
            id="rate"
            name="rate"
            value={productData.rate}
            onChange={handleChange}
            className="form-input"
          /><br></br><br></br>
          {errors.rate && <p className="form-error">{errors.rate}</p>}
        </div>
        <br></br>
        <button type="submit" className="form-button">Submit</button><br></br>
      </form>
    </div>
    </center>
    </>
  );
}

export default AddProduct;