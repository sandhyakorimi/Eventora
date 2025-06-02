import React from "react";

const Birthday =()=>{
    const myobj = [
        {myimg1:<img src='Birthday/BCakes.jpg' className='mrg2'/>, name1:"Cakes"},
        {myimg1:<img src='Birthday/BClothesB.jpg' className='mrg2'/>, name1:"Boys Wear"},
        {myimg1:<img src='Birthday/BClothesW.jpg' className='mrg2'/>, name1:"Girls Wear"},
        {myimg1:<img src='Birthday/BCards.jpg' className='mrg2'/>, name1:" Invitation Cards"},
        {myimg1:<img src='Birthday/BDecoration.jpg' className='mrg2'/>, name1:"Decoration"},
        {myimg1:<img src='Birthday/BFlowers.jpg' className='mrg2'/>, name1:"Flowers"},
        {myimg1:<img src='Birthday/BGifts.jpg' className='mrg2'/>, name1:"Gifts"},
        {myimg1:<img src='Birthday/BCandles.jpg' className='mrg2'/>, name1:"Candless"},
        {myimg1:<img src='Birthday/BClownBooking.jpg' className='mrg2'/>, name1:"Clown Booking"},
        {myimg1:<img src='Birthday/BReturnGifts.jpg' className='mrg2'/>, name1:"Return Gifts"},
        {myimg1:<img src='Birthday/BPartySupplies.jpg' className='mrg2'/>, name1:"Party Supplies"},
        {myimg1:<img src='Birthday/BWrappingMaterials.jpg' className='mrg2'/>, name1:"WrappingMaterials"},
        {myimg1:<img src='BabyShower/BSPhotographyBooking.jpg' className='mrg2'/>, name1:"Photography"},
        {myimg1:<img src='BabyShower/BSMusicSystems.jpg' className='mrg2'/>, name1:"Music Systems"},
    ];
    return(
        <>
         <div className="mrgWoMenDiv">
        <div className="Bridetxt" style={{color:"maroon"}}><u>Birthday Essentials</u></div>
        <div className="BrideDiv">
            {
                myobj.map((val,index)=>(
                    <div key={index} className="BrideCard">
                            <div className="BrideInnerImg">{val.myimg1}</div>
                            <div className="BirthdayInnerText">{val.name1}</div>
                    </div>
                ))
            }
        </div>
        </div>
        </>
    )
}
export default Birthday