import { Pointer } from "lucide-react";
import React from "react";
import  { useState } from "react";
const Haldi = ({onLike})=>{
    const [like, setLike] = useState(false);

    const myobj = [
        {myimg1:<img src='/haldi/haldimendress1.jpg' className='mrg2'/>, name1:"MensWear", discount:"20% OFF", price:5000},
        {myimg1:<img src='/haldi/haldiwomendress1.jpg' className='mrg2'/>, name1:" Bridal Wear", discount:"15% OFF", price:6000},
        {myimg1:<img src='/haldi/haldimendress2.jpg' className='mrg2'/>, name1:"Mens Wear", discount:"25% OFF", price:4500},
        {myimg1:<img src='/haldi/haldiaccessories.jpg' className='mrg2'/>, name1:"Accessories", discount:"20% OFF", price:10000},
        {myimg1:<img src='/haldi/haldiwomendress1.jpg' className='mrg2'/>, name1:"Womens Wear", discount:"22% OFF", price:5500},
        {myimg1:<img src='/haldi/haldibowl.jpg' className='mrg2'/>, name1:"bowl", discount:"22% OFF", price:5500},
        {myimg1:<img src='/haldi/haldineeds1.jpg' className='mrg2'/>, name1:"Haldi Items", discount:"22% OFF", price:5500},
        {myimg1:<img src='/haldi/haldiwomendressesGang.jpg' className='mrg2'/>, name1:"Gang dresses", discount:"22% OFF", price:5500},
        {myimg1:<img src='/haldi/haldiwomendress3.jpg' className='mrg2'/>, name1:"Women wear ", discount:"22% OFF", price:5500},
        {myimg1:<img src='/haldi/haldiwomengangdresses2.jpg' className='mrg2'/>, name1:"Gang Wear ", discount:"22% OFF", price:5500},
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
             <h1 style={{display:"inline-block"}}>  {like[val.name1] ? "❤️" : "🤍"}</h1>
            </span>
            <p>Discount: {val.discount}</p>
            <p>Price: ₹{val.price}</p>
          </div>
        ))}
      </div>
    );
  };
export default Haldi