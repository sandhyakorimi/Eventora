import { Pointer } from "lucide-react";
import React from "react";
import  { useState } from "react";
const  Lehangas = ({onLike})=>{
    const [like, setLike] = useState(false);

    const myobj = [
        {myimg1:<img src='/marriage/wedplans/lehanga1.jpg' className='mrg2'/>, name1:"Omega", discount:"20% OFF", price:5000},
        {myimg1:<img src='/marriage/wedplans/lehanga2.jpg' className='mrg2'/>, name1:" Seikp", discount:"15% OFF", price:6000},
        {myimg1:<img src='/marriage/wedplans/lehanga3.jpg' className='mrg2'/>, name1:"Tissot", discount:"25% OFF", price:4500},
        {myimg1:<img src='/marriage/wedplans/lehanga4.jpg' className='mrg2'/>, name1:"Armani Exchange", discount:"20% OFF", price:10000},
        {myimg1:<img src='/marriage/wedplans/lehanga5.jpg' className='mrg2'/>, name1:"Fossil", discount:"22% OFF", price:5500},       
    ];
    const likebtn = (item) => {
        setLike((prevLike) => ({
          ...prevLike,
          [item.name1]: !prevLike[item.name1]
        }));
        onLike(item);
      };
    
    return(
        
    <div>
  
    <div className="products-container">
      {myobj.map((val,index) => (
        <div key={index} className="product-card">
         <div className="img">{val.myimg1}</div>
          <span>{val.name1} </span>
          <span onClick={()=>likebtn(val)} style={{fontSize:"24px", color:like[val.name1]===true?"#c9184a":"grey", cursor:"pointer", transition:"color 0.3s"}}>
          {like[val.name1] ? "❤️" : "🤍"}</span>
         <p>Discount: {val.discount}</p>
          <p>Price: ₹{val.price}</p>
        </div>
      ))}
    </div>

    </div>
    )
}
export default Lehangas 