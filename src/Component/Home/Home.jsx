import React from 'react'

import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';
import MainSlider from '../MainSlider/MainSlider';
import { Provider } from 'react-redux';
import  store  from '../../store';


export default function Home() {
  return <>
  
  <Provider store={store}>
<MainSlider/>
    <FeaturedProducts/>
    </Provider>
  </>
}
  