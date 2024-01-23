import React, {useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, updateProduct, actions } from '../../store';
import axios from 'axios';
import { useQuery } from "react-query";
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function FeaturedProducts(product) {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts); 
  const sort = useSelector((state) => state.sort); 
  const [editingProduct, setEditingProduct] = useState(null);
  const [editProductValue, setEditProductValue] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // changes the edit states to show edit inputs
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setEditProductValue(product);
  };

  // dispatches a updtae function to do changes in the database
  const handleUpdateProduct = (id) => {
    //console.log(editProductValue);
    dispatch(updateProduct(id, editProductValue));
    setEditingProduct(null);
    setEditProductValue(null);
  };

  // set the edit state to remove the edit fields
  const handleCancleProduct = (product) => {
    setEditingProduct(null);
    setEditProductValue(null)
  };

  // dispatche tha ction to delte product from db
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  // sorts the products by price
  const handleSortButton = () => {
    dispatch(actions.sortProducts('price'));
  }

  // removes the sort by price
  const handleRemoveSort = () => {
    dispatch(actions.removeSort('price'));
  }

  // add the product to the cart
  const handleAddToCart = (product) => {
    // handle adding to cart logic
    dispatch(actions.addToCart(product));
  };

  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  let { addToCart } = useContext(cartContext);

  async function addProduct(id) {
    let response = await addToCart(id);
    if (response.data.status === 'success') {
      toast.success('Product successfully added', {
        duration: 4000,
        position: 'top-center',
      });
    } else {
      toast.error('Something failed. Try again', {
        duration: 4000,
        position: 'top-center',
      });
    }
  }


  function getAllProducts() {
    // const query = searchQuery ? `?search=${searchQuery}` : '';
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  function searchProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/search?q=${searchQuery}`);
  }

  let { isLoading, data } = useQuery(['featuredProducts', searchQuery], getAllProducts);
  let {  dataa } = useQuery(['featuredProducts', searchQuery], searchProducts);
  console.log(searchQuery);

  return (
    <>
    
      <h2 className='mt-2'>{t('product')}</h2>
      {dataa?
      <input
        type="text"
        className="my-input"
        placeholder={t('search')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />: <input
      type="text"
      className="my-input"
      placeholder={t('search')}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}/>
}
      {isLoading ? (
        <div className='w-100 d-flex justify-content-center py-5'>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        
        <div className="row">
         
          {data?.data.data.map((product) => (
              (product.price)<=400?
              null
              :
              <div className="col-md-2" key={product._id}>
              
              <div className="product m-2 p-2">
                <Link to={`/productdetails/${product._id}`}>
                  <img className='w-100 mb-2' src={product.imageCover} alt="product" />
                  <h1 className='font-sm text-main'>{product.title.split(" ").slice(0 , 2)}</h1>
                  <h6 className='font-sm'>{product.description.split(" ").slice(0,2).join("         ")}</h6>
                  <p className='d-flex justify-content-between'>
                    <span>{product.price} {t('egy')}</span>
                    <span>
                      <i className='fa fa-star rating-color me-1'></i>
                      {product.ratingsAverage}
                    </span>
                  </p>
                </Link>
                <a href={`/productdetails/${product._id}`}>
                  <font color="#5d27b3">{t('detail')}</font>
                </a>
                {product.ratingsAverage >= 4.8 && (
                <h style={{ color: 'red' ,paddingLeft: '35px' }}>discount</h>
              )}


                <button onClick={() => addProduct(product._id)} className=' bg-main text-white w-100 btn-sm '>{t('addcart')}</button>
              </div>
             
    
              </div>
          
          ))}
                
</div>
      )}
    </>
  );
}