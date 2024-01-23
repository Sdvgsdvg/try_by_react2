import React, { useContext } from 'react'
import "./NavBar.module.css"
import {Link, useNavigate} from "react-router-dom"
import { userContext } from '../../Context/UserContext'

import { useTranslation  } from 'react-i18next';
import i18n from '../../il8n';
// import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store';


export default function NavBar() {



let {userToken , setUserToken} = useContext(userContext)
let navigate = useNavigate()

function logOut() {
  localStorage.removeItem('userToken')
  setUserToken(null)
  navigate("/login")
}

const { t } = useTranslation();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};


  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {userToken !== null?
        <>
        <li className="nav-item">
          <Link className="nav-link" to="/">{t("home")}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">{t("cat")}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">{t("cart")}</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Add-product">Add Product</Link>
        </li>
        
        </>: ""}
        
        

        
        </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  
        {userToken !== null ?
        <>
          <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={() => changeLanguage('en')}>{t("lange")}</span>
          </li>
          <li className="nav-item">
        <span className="nav-link cursor-pointer" onClick={() => changeLanguage('ar')}>{t("langa")}</span>
        </li>
          <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={()=> logOut()}>{t("logout")}</span>
        </li>
        </>:
        <>
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">{t("login")}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">{t("register")}</Link>
        </li>
        
        </>
        }
       
        
        
        
        

        
        </ul>
      
    </div>
  </div>
</nav>
  </>
}
