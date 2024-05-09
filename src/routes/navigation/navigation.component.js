import { Outlet ,Link } from "react-router-dom";
import { Fragment ,useContext} from "react";
import {ReactComponent as CrownLogo } from '../../asssets/crown.svg'
import './navigation.styles.scss'
import CartDropdown from "../../componenets/caart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart-dropdown.context";
import CartIcon from "../../componenets/cart-icon/cart-icon.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {isCartOpen}=useContext(CartContext)


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon></CartIcon>

        </div>
        {isCartOpen && <CartDropdown/>}
        
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;