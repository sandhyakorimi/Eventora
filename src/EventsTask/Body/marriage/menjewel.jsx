import { Pointer } from "lucide-react";
import React from "react";
import  { useState } from "react";
const MenJewel = ()=>{
    const [like, setLike] = useState(false);

    const myobj = [
        {myimg1:<img src='/marriage/groom/j1.jpg' className='mrg2'/>, name1:"Omega", discount:"20% OFF", price:5000},
        {myimg1:<img src='/marriage/groom/j2.jpg' className='mrg2'/>, name1:" Seikp", discount:"15% OFF", price:6000},
        {myimg1:<img src='/marriage/groom/j3.jpg' className='mrg2'/>, name1:"Tissot", discount:"25% OFF", price:4500},
        {myimg1:<img src='/marriage/groom/j4.jpg' className='mrg2'/>, name1:"Armani Exchange", discount:"20% OFF", price:10000},
        {myimg1:<img src='/marriage/groom/j5.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},
        {myimg1:<img src='/marriage/groom/j6.jpg' className='mrg2'/>, name1:"Titan", discount:"12% OFF", price:7200},
        

    ];
    const likebtn = (index) => {
        setLike((prevLike) => ({
          ...prevLike,
          [index]: !prevLike[index]
        }));
      };
    
    return(
        
    <div>
  
    <div className="products-container">
      {myobj.map((val,index) => (
        <div key={index} className="product-card">
         <div className="img">{val.myimg1}</div>
          <span>{val.name1} </span>
          <span onClick={()=>likebtn(index)} style={{fontSize:"24px", color:like[index]?"red":"grey", cursor:"pointer", transition:"color 0.3s"}}>
          &#10084;</span>
         <p>Discount: {val.discount}</p>
          <p>Price: ₹{val.price}</p>
        </div>
      ))}
    </div>

    </div>
    )
}
export default MenJewel