import React, { useContext } from 'react'
import "./Address.module.css"
import { useFormik } from 'formik';
import { cartContext } from '../../Context/CartContext';
import { useTranslation } from 'react-i18next';

export default function Address() {

  const { t } = useTranslation();

  let {onlinePayment ,getLoggedCart} = useContext(cartContext)

  async function handleSubmit(values) {
    let response =await getLoggedCart();
    let {data} =await onlinePayment(response.data.data._id , "http://localhost:3001" ,values);
    window.location.href = data.session.url
  }

  let formik = useFormik({
    initialValues:{
      details:"",
      phone:"",
      city:"",
    },
    onSubmit:handleSubmit
  })
  return <>

  <form onSubmit={formik.handleSubmit} className='form'>

    <label htmlFor="details">{t('detail')} : </label>
    <input type="text" name='details' id='details' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.details} className='form-control my-3' />
    <label htmlFor="phone">{t('phone')} : </label>
    <input type="tel" name='phone' id='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className='form-control my-3' />
    <label htmlFor="city">{t('city')} : </label>
    <input type="text" name='city' id='city' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} className='form-control my-3' />
    <button type='submit' className='btn bg-main text-white mb-3'>{t('paynow')}</button>
  </form>
  
  </>
}
