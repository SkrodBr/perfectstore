import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from '../components/StateProvider';

function Header() {
  const[{basket}] = useStateValue();

  return (
    <div className='header'>
        <Link to ="/">
          <img 
              className="headerLogo" 
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
          />
          </Link>

        <div className = "headerSearch">
            <input className='headerSearchInput'
            type="text" />
            <SearchIcon className="headerSearchIcon"/>
        </div>
        <Link to="/login">
          <div className='headerNav'>
            <div className = "headerOption">
              <span className='headerOptionLineOne'>
                Hello Guest
              </span>
              <span className='headerOptionLineTwo'>
                Sign In
              </span>
              </div>
          </div>
        </Link>

            <Link to="/checkout">
            <div className="headerOptionBasket">
              <ShoppingBasketIcon />
              <span className="headerOptionLineTwo
              headerBasketCount">{basket.length}</span>
            </div>
            </Link>
      </div>
  )
}

export default Header
