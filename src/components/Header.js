import { Link } from 'react-router-dom';
import logo from './images/logoImg.jpg';
import { useSelector } from 'react-redux';
import store from '../store';

const Header=()=>{
    const cartItems=useSelector(store=>store.cart.items);
return(
<>
<div className="flex justify-between shadow-inner">
<img className="w-36 h-24" src={logo}/>
    <ul className='flex flex-row'>
        <li className='m-5 font-normal text-xl p-2'><Link to="/">Home</Link></li>
        <li className='m-5 font-normal text-xl p-2'><Link to="/about">About</Link></li>
        <li className='m-5 font-normal text-xl p-2'><Link to="/contact">Contact</Link></li>
        <li className='m-5 font-normal text-xl p-2'><Link to="/cart">🛒  
        <span className='absolute top-3 font-bold text-sm right-6 bg-green-200 rounded-xl text-center w-5'>{cartItems.length}</span></Link></li>
    </ul>
</div>
</>
)
}
export default Header;