
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from "./Component/Home/Home.jsx"
import Layout from "./Component/Layout/Layout.jsx"
import Categories from "./Component/Categories/Categories.jsx"
import Cart from "./Component/Cart/Cart.jsx"
import Login from "./Component/Login/Login.jsx";
import AddProduct from './CRUD/AddProduct.js'
import Register from "./Component/Register/Register.jsx";
import  { userContext } from './Context/UserContext.js';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute.jsx';
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx';
import CartContextProvider from './Context/CartContext.js';
import Address from './Component/Address/Address.jsx';

import { I18nextProvider   } from 'react-i18next';
import i18n from './il8n.js';
// import { Provider } from 'react-redux';
// import { store } from './store';



let routers = createBrowserRouter([
  {path:"/", element:  <Layout/>  ,children:[
    {index:true , element: <ProtectedRoute><Home/></ProtectedRoute> },
    {path:"categories" ,element: <ProtectedRoute><Categories/></ProtectedRoute> },
    {path:"cart" ,element:<ProtectedRoute><Cart/></ProtectedRoute>  },
    {path:"login" , element: <Login/>},
    {path:"Add-product" , element: <AddProduct/>},
    {path:"register" , element:<Register/>},
    {path:"address" , element: <ProtectedRoute> <Address/></ProtectedRoute>},
    {path:"productdetails/:id" , element: <ProtectedRoute> <ProductDetails/></ProtectedRoute>},
  ]
},
])


function App() {

  let {setUserToken} = useContext(userContext);
  useEffect(()=>{
    if(localStorage.getItem("userToken") !== null){
      setUserToken(localStorage.getItem("userToken"))
    }
  } );

  return <CartContextProvider>
    <I18nextProvider i18n={i18n}>
<RouterProvider router={routers}></RouterProvider>
</I18nextProvider>
</CartContextProvider>

}

export default App;
