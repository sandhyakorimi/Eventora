

import React, { useState } from "react";

const CoupleWear = ({onLike}) => {
  // Initialize 'like' as an object to store multiple item states
  const [like, setLike] = useState({});

  const myobj = [
    { myimg1: <img src='/marriage/wedplans/co1.jpg' className='mrg2' />, name1: "Omega", discount: "20% OFF", price: 5000 },
    { myimg1: <img src='/marriage/wedplans/co2.jpg' className='mrg2' />, name1: "Seiko", discount: "15% OFF", price: 6000 },
    { myimg1: <img src='/marriage/wedplans/co3.jpg' className='mrg2' />, name1: "Tissot", discount: "25% OFF", price: 4500 },
    { myimg1: <img src='/marriage/wedplans/co4.jpg' className='mrg2' />, name1: "Armani Exchange", discount: "20% OFF", price: 10000 },
    { myimg1: <img src='/marriage/wedplans/co5.jpg' className='mrg2' />, name1: "Fossil", discount: "22% OFF", price: 5500 },
    { myimg1: <img src='/marriage/wedplans/co6.jpg' className='mrg2' />, name1: "Fossil", discount: "22% OFF", price: 5500 },
    { myimg1: <img src='/marriage/wedplans/co7.jpg' className='mrg2' />, name1: "Titan", discount: "12% OFF", price: 7200 },
    { myimg1: <img src='/marriage/wedplans/co8.jpg' className='mrg2' />, name1: "Velvet Sherwani", discount: "13% OFF", price: 7000 },
  ];

  const likebtn = (item) => {
    setLike((prevLike) => ({
      ...prevLike,
      [item.name1]: !prevLike[item.name1]
    }));
    onLike(item); // still send to parent if needed
  };

  return (
    <div className="products-container">
      {myobj.map((val, index) => (
        <div key={index} className="product-card">
          <div className="img">{val.myimg1}</div>
          <span>{val.name1}</span>

          {/* Like Button */}
          <span
            onClick={() => likebtn(val)}
            style={{
              fontSize: "45px",
              color: like[val.name1] === true ? "#c9184a" : "grey",
              cursor: "pointer",
              background: "none",
              transition: "color 0.3s ease",
              border:"none"
            }}
          >
                    {like[val.name1] ? "❤️" : "🤍"}

          </span>
          <p>Discount: {val.discount}</p>
          <p>Price: ₹{val.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CoupleWear;
