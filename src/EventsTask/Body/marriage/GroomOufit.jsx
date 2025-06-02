


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GentsWear = ({ onLike }) => {
//   const [like, setLike] = useState({});
//   const navigate = useNavigate()
//   const myobj = [
//     { id: 1, myimg1: <img src='/marriage/groom/g1.jpg' className='mrg2' />, name1: "Royal Sherwani", discount: "20% OFF", price: 5000 },
//     { id: 2, myimg1: <img src='/marriage/groom/g2.jpg' className='mrg2' />, name1: "Classic Kurta Pajama", discount: "15% OFF", price: 6000 },
//     { id: 3, myimg1: <img src='/marriage/groom/g3.jpg' className='mrg2' />, name1: "Jodhpuri Suit", discount: "25% OFF", price: 4500 },
//     { id: 4, myimg1: <img src='/marriage/groom/g4.jpg' className='mrg2' />, name1: "Indo-Western Sherwani", discount: "20% OFF", price: 10000 },
//     { id: 5, myimg1: <img src='/marriage/groom/g5.jpg' className='mrg2' />, name1: "Bandhgala Suit", discount: "22% OFF", price: 5500 },
//     { id: 6, myimg1: <img src='/marriage/groom/g6.jpg' className='mrg2' />, name1: "Pathani Suit", discount: "12% OFF", price: 7200 },
//     { id: 7, myimg1: <img src='/marriage/groom/g7.jpg' className='mrg2' />, name1: "Dhoti Kurta", discount: "20% OFF", price: 9000 },
//     { id: 8, myimg1: <img src='/marriage/groom/g8.jpg' className='mrg2' />, name1: "Angrakha Kurta", discount: "10% OFF", price: 8000 },
//     { id: 9, myimg1: <img src='/marriage/groom/g9.jpg' className='mrg2' />, name1: "Rajputi Poshaak", discount: "2% OFF", price: 6400 },
//     { id: 10, myimg1: <img src='/marriage/groom/g10.jpg' className='mrg2' />, name1: "Velvet Sherwani", discount: "13% OFF", price: 7000 },
//     { id: 11, myimg1: <img src='/marriage/groom/g11.jpg' className='mrg2' />, name1: "Tuxedo Suit", discount: "5% OFF", price: 12000 },
//   ];

//   const likebtn = (item) => {
//     setLike((prevLike) => ({
//       ...prevLike,
//       [item.name1]: !prevLike[item.name1]
//     }));
//     onLike(item); // still send to parent if needed
//   };

//   const handleBuyNow = (item) =>{
//     navigate("/buyNow",{state:{...item,liked:like[item.name1]}})
//   };
//   return (
//     <div className="products-container">
//       {myobj.map((val) => (
//         <div key={val.id} className="product-card">
//           <div className="img">{val.myimg1}</div>
//           <span >{val.name1}</span>
//           <div className="LikeBtn"
//             onClick={() => likebtn(val)}
//             style={{
//               fontSize: "24px",
//               color: like[val.name1] === true ? "#c9184a" : "grey",
//               cursor: "pointer",
//               background: "none",
//               border: "none"
//             }}
//           >
//              {like[val.name1] ? "❤️" : "🤍"}
//           </div>
//           <p>Discount: {val.discount}</p>
//           <p>Price: ₹{val.price}</p>
//           <button className="BuyBtn" onClick={()=>handleBuyNow(val)}>BuyNow</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GentsWear;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GentsWear = ({ onLike }) => {
  const [like, setLike] = useState({});
  const navigate = useNavigate();

  const myobj = [
    { id: 1, myimg1: '/marriage/groom/g1.jpg', name1: "Royal Sherwani", discount: "20% OFF", price: 5000 },
    { id: 2, myimg1: '/marriage/groom/g2.jpg', name1: "Classic Kurta Pajama", discount: "15% OFF", price: 6000 },
    { id: 3, myimg1: '/marriage/groom/g3.jpg', name1: "Jodhpuri Suit", discount: "25% OFF", price: 4500 },
    { id: 4, myimg1: '/marriage/groom/g4.jpg', name1: "Indo-Western Sherwani", discount: "20% OFF", price: 10000 },
    { id: 5, myimg1: '/marriage/groom/g5.jpg', name1: "Bandhgala Suit", discount: "22% OFF", price: 5500 },
    { id: 6, myimg1: '/marriage/groom/g6.jpg', name1: "Pathani Suit", discount: "12% OFF", price: 7200 },
    { id: 7, myimg1: '/marriage/groom/g7.jpg', name1: "Dhoti Kurta", discount: "20% OFF", price: 9000 },
    { id: 8, myimg1: '/marriage/groom/g8.jpg', name1: "Angrakha Kurta", discount: "10% OFF", price: 8000 },
    { id: 9, myimg1: '/marriage/groom/g9.jpg', name1: "Rajputi Poshaak", discount: "2% OFF", price: 6400 },
    { id: 10, myimg1: '/marriage/groom/g10.jpg', name1: "Velvet Sherwani", discount: "13% OFF", price: 7000 },
    { id: 11, myimg1: '/marriage/groom/g11.jpg', name1: "Tuxedo Suit", discount: "5% OFF", price: 12000 },
  ];

  const likebtn = (item) => {
    setLike((prevLike) => ({
      ...prevLike,
      [item.name1]: !prevLike[item.name1]
    }));
    onLike(item);
  };

  const handleBuyNow = (item) => {
    navigate("/buyNow", {
      state: {
        ...item,
        liked: like[item.name1]
      }
    });
  };

  return (
    <div className="products-container">
      {myobj.map((val) => (
        <div key={val.id} className="product-card">
          <div className="img">
            <img src={val.myimg1} className="mrg2" alt={val.name1} />
          </div>
          <span>{val.name1}</span>
          <div className="LikeBtn"
            onClick={() => likebtn(val)}
            style={{
              fontSize: "40px",
              color: like[val.name1] ? "#c9184a" : "grey",
              position:"relative",
              top:"-55px",
              left:"300px",
              cursor: "pointer",
              background: "none",
              border: "none"
            }}
          >
            {like[val.name1] ? "❤️" : "🤍"}
          </div>
          <p>Discount: {val.discount}</p>
          <p>Price: ₹{val.price}</p>
          <button className="BuyBtn"  onClick={() => handleBuyNow(val)}>BuyNow</button>
        </div>
      ))}
    </div>
  );
};

export default GentsWear;

