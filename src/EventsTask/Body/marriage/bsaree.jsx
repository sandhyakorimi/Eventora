import { Pointer } from "lucide-react";
import React from "react";
import  { useState } from "react";
const Saree = ()=>{
    const [like, setLike] = useState(false);

    const myobj = [
        {myimg1:<img src='/marriage/bride/saree1.jpg' className='mrg2'/>, name1:"Chiffon", discount:"20% OFF", price:5000},
        {myimg1:<img src='/marriage/bride/saree2.jpg' className='mrg2'/>, name1:" Silk", discount:"15% OFF", price:6000},
        {myimg1:<img src='/marriage/bride/saree3.jpg' className='mrg2'/>, name1:"Tissue", discount:"25% OFF", price:4500},
        {myimg1:<img src='/marriage/bride/saree4.jpg' className='mrg2'/>, name1:"half Pattu", discount:"20% OFF", price:10000},
        {myimg1:<img src='/marriage/bride/saree5.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},
        {myimg1:<img src='/marriage/bride/saree6.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},
        {myimg1:<img src='/marriage/bride/saree7.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},
        {myimg1:<img src='/marriage/bride/saree8.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},
        {myimg1:<img src='/marriage/bride/saree9.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},
        {myimg1:<img src='/marriage/bride/saree10.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},
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
        {myobj.map((val) => (
          <div key={val.id} className="product-card">
            <div className="img">{val.myimg1}</div>
            <span>{val.name1}</span>
            <span
              onClick={() => likebtn(val)}
              style={{
                fontSize: "24px",
                color: like[val.name1] === true ? "#c9184a" : "grey",
                cursor: "pointer",
                background: "none",
                border: "none"
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
export default Saree