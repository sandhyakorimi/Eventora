import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './events.css';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Body=()=>{
      const [like, setLike] = useState(false);
  
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
    arrows: true,
    appendDots: (dots) => (
      <div style={{ fontSize:"50px", position:"absolute",top:'500px',width: '100%' }}>
        <ul style={{ display: 'flex', justifyContent: 'center' }}>
          {dots}
        </ul>
      </div>
    ), 
    
    pauseOnHover: false, 
  };

  const myobj = [{myimg:<img src="logos/bday1.jpg"  className="myimg"/>},
    {myimg:<img src="logos/marriage.jpg" className="myimg"/>},
    {myimg:<img src="logos/festiv.jpg" className="myimg"/>},
    {myimg:<img src="logos/aniv.jpg" className="myimg"/>},
    {myimg:<img src="logos/engage.jpg" className="myimg"/>},
    {myimg:<img src="logos/hwarming.jpg" className="myimg"/>},
    {myimg:<img src="logos/bshower.jpg" className="myimg"/>},
    {myimg:<img src="logos/farewell.jpg" className="myimg"/>},
    {myimg:<img src="logos/get-together.jpg" className="myimg"/>},
    {myimg:<img src="logos/meet2.jpg" className="myimg"/>},

];
const mydiv1obj=[
  {myimg1:<img src='logos/Haldi.jpg' className='myimg1'/>, name:"Haldi"},
  {myimg1:<img src='logos/mrgImg2.jpg' className='myimg1'/>, name:"Marriage"},
  {myimg1:<img src='logos/bsho2.jpg' className='myimg1'/>, name:"Baby Shower"},
  {myimg1:<img src='logos/hwarm1.jpg' className='myimg1'/>, name: "House Warming"},
  {myimg1:<img src='logos/bday2.jpg' className='myimg1'/>, name:"Birthday"},
  {myimg1:<img src='logos/festiv2.jpg' className='myimg1'/>, name:'Festives'},
  {myimg1:<img src='logos/aniv2.jpg' className='myimg1'/>, name:"Anniversary"},
  {myimg1:<img src='logos/meeting.jpg' className='myimg1'/>,name:"Meetings"},
  {myimg1:<img src='logos/hsaree.jpg' className='myimg1'/>, name:"Half Saree"},
];
 const myobj3 = [
  {myimg:<img src='logos/img1.jpg' className='mrg2'></img>, name1:"Men Royal Collection", discount:"20% OFF", price:8000},
  {myimg:<img src='logos/img2.jpg' className='mrg2'></img>, name1:"Wedding Saree", discount:"15% OFF", price:5000},
  {myimg:<img src='logos/img3.jpg' className='mrg2'></img>, name1:"Half Saree", discount:"21% OFF", price:4000},
  {myimg:<img src='logos/img4.jpg' className='mrg2'></img>, name1:"Baby Girl Frock", discount:"10% OFF", price:9000},
  {myimg:<img src='logos/img5.jpg' className='mrg2'></img>, name1:"Saree", discount:"19% OFF", price:6000},
  {myimg:<img src='logos/img6.jpg' className='mrg2'></img>, name1:"Pattu Half Saree", discount:"16% OFF", price:5900},
  {myimg:<img src='logos/img7.jpg' className='mrg2'></img>, name1:"Boy Suit", discount:"20% OFF", price:6000},
  {myimg:<img src='logos/img8.jpg' className='mrg2'></img>, name1:"Birthday Decoration ", discount:"20% OFF", price:12000},
  {myimg:<img src='logos/img9.jpg' className='mrg2'></img>, name1:"Sound System", discount:"10% OFF", price:5000 , },
  {myimg:<img src='logos/img10.jpg' className='mrg2'></img>, name1:"Return Gifts", discount:"8% OFF", price:5000},

 ]
 const likebtn = (index) => {
  setLike((prevLike) => ({
    ...prevLike,
    [index]: !prevLike[index]
  }));
};
  return (
    <div className='body'>

       <div className='div1'>
        {
          mydiv1obj.map((val,index)=>(
              <div className='mydiv1cls' onClick={() => {
                if (val.name === "Marriage") {
                  navigate("/marriage");
                }
                else if (val.name === "Birthday"){
                  navigate("/birthday")
                }
                else if (val.name === "Baby Shower"){
                  navigate("/babyshower")
                }
                else if (val.name === "Anniversary"){
                  navigate("/anniversary")
                }
                else if (val.name === "Festives"){
                  navigate("/festives")
                }
                else if (val.name === "Haldi"){
                  navigate("/haldi")
                }
                else if (val.name === "Meetings"){
                  navigate("/meetings")
                }
                else if (val.name === "House Warming"){
                  navigate("/houseWarming")
                }
                else if (val.name === "Half Saree"){
                  navigate("/halfSaree")
                }
              }}
              style={{ cursor: 'pointer' }}>
                <div>{val.myimg1}</div>
                <div className='names'>{val.name}</div>
              </div>
          ))
        }
       </div>

       <div className='div2'>
         <Slider {...settings}>
         {
            myobj.map((val,index)=>(
                <div key={index} className='mySlideImg'>
                   <p>{val.myimg}</p> 
                </div>
            ))
         }
        </Slider>
        </div>

         <div className='div3'>
         <div className="products-container">
      {myobj3.map((val,index) => (
        <div key={index} className="product-card">
         <div className="img">{val.myimg}</div>
          <span className='span1'>{val.name1}</span>
          <span onClick={()=>likebtn(index)} style={{fontSize:"24px", color:like[index]?"red":"grey", cursor:"pointer", transition:"color 0.3s"}}>
          <h1 style={{display:"inline-block", position:"relative" , left:" 50px"}}>&#10084;</h1></span>
          <p>Discount: {val.discount}</p>
          <p>Price: ₹{val.price}</p>
        </div>
      ))}
    </div>

         </div>

    </div>
  )
}

export default Body