// import React from 'react'
// import {User, ChevronDown, ShoppingCart} from "lucide-react"
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// const Header=({ wishlist })=>{
//   const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);
//     const onMouseHover=()=>
//       setIsOpen(true);
//     const onMouseLeave=()=>{
//       setIsOpen(false);
//     }
//     const onMouseClick=()=>{
//       setIsOpen(true);
//     }

//     // const handleAddToCart = () => {
//     //   alert("Item added to cart!");
//     // };
  
//   return (
//     <div className='header'>

//       <div className="head">
//         <div className="icon"></div>
       
//         <div className='searchbox'>
//              <input type="text" placeholder='Search for Event Essentials, Services' className='searchIn'/>
//              <span  className='searchIcon'>&#128269;</span>
//         </div>

// {/* <div><span style={{fontSize:"24px", color:"red", cursor:"pointer", transition:"color 0.3s"}}>
//       &#10084;</span></div>
//        */}

//       <div onClick={() => navigate('/wishlist')} style={{ cursor: 'pointer', position: 'relative' }}>
//         <span style={{ fontSize: "24px", color: "red" }}>&#10084;</span>
//         <span style={{ position: 'absolute', top: 0, right: -5 }}>{wishlist.length}</span> </div>
//          {/* <div className='cartDiv'>
//            <button className="cartBtn" onClick={handleAddToCart}><ShoppingCart size={22} /><span> Cart</span> </button>
//          </div> */}

//          <div className='selling'>
//            <button className='sellBtn'><span className='span3'>Become a Seller</span></button>
//          </div>
     

//       <div className='Login' onMouseHover={onMouseHover} onMouseLeave={onMouseLeave} onMouseEnter={onMouseHover}>
//           <button className='loginBtn' onClick={onMouseClick} >
//           <User size={20}/><span> Login</span> <ChevronDown size={18}/> 
//           </button>
//           {isOpen &&(
//             <div className='dropDown' > 
//                 <ul>
//                   <li>Sign In</li>
//                   <li>Sign Up</li>
//                 </ul>
//             </div>
//           )}
//       </div>

//     </div> 
//     </div>
//   )
// }

// export default Header


import React, { useState } from 'react';
import { User, ChevronDown, ShoppingCart, CalendarDays  } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Header = ({ wishlist }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onMouseHover = () => setIsOpen(true);
  const onMouseLeave = () => setIsOpen(false);
  const onMouseClick = () => setIsOpen(true);

  return (
    <div className='header'>
      <div className="head">
        <div className="icon"> <h1 className="modern-title">✦Eventora✦</h1>
        </div>
        <div className='searchbox'>
          <input type="text" placeholder='Search for Event Essentials, Services' className='searchIn' />
          <span className='searchIcon'>&#128269;</span>
        </div>

        <div onClick={() => navigate('/wishlist')} style={{ cursor: 'pointer', position: 'relative' }}>
          <span style={{ fontSize: "24px", color: "red" }}> <h1> &#10084; </h1></span>
          {/* <span style={{ position: 'absolute', top: 0, right: -5 }}>{wishlist.length}</span> */}
        </div>

        <div className='selling'>
          <button className='sellBtn'><span className='span3'><h1>Become a Seller</h1></span></button>
        </div>

        <div className='Login' onMouseOver={onMouseHover} onMouseLeave={onMouseLeave}>
          <button className='loginBtn' onClick={onMouseClick}>
            <User size={25} /><span className='span3'> <h1 style={{display:"inline-block"}}>Login</h1></span> <ChevronDown size={18} />
          </button>
          {isOpen && (
            <div className='dropDown'>
              <ul>
                <li>Sign In</li>
                <li onClick={()=>{
                  navigate("/registerForm")
                }}>Sign Up</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
