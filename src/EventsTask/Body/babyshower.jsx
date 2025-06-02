import React from "react";

const BabyShower =()=>{
    const myobj = [
        {myimg1:<img src='BabyShower/BSInvitation.jpg' className='mrg2'/>, name1:"Invitation Cards"},
        {myimg1:<img src='BabyShower/BSSarees.jpg' className='mrg2'/>, name1:"Sarees"},
        {myimg1:<img src='BabyShower/BSDresses.jpg' className='mrg2'/>, name1:"Dresses"},
        {myimg1:<img src='BabyShower/BSBalloons.jpg' className='mrg2'/>, name1:"Balloons"},
        {myimg1:<img src='BabyShower/BSWelcomeBaby.jpg' className='mrg2'/>, name1:"welcome Baby cards"},
        {myimg1:<img src='BabyShower/BSDecorativeCandles.jpg' className='mrg2'/>, name1:"Decorative Candles"},
        {myimg1:<img src='BabyShower/BSGifts.jpg' className='mrg2'/>, name1:"Gifts"},
        {myimg1:<img src='BabyShower/BSReturnGifts.jpg' className='mrg2'/>, name1:"Return Gifts"},
        {myimg1:<img src='BabyShower/BSPhotographyBooking.jpg' className='mrg2'/>, name1:"Photography"},
        {myimg1:<img src='BabyShower/BSMusicSystems.jpg' className='mrg2'/>, name1:"Music Systems"},
        {myimg1:<img src='BabyShower/BSTableDecor.jpg' className='mrg2'/>, name1:"Table Decor"},
        {myimg1:<img src='BabyShower/BSPartySupplies.jpg' className='mrg2'/>, name1:"Party Supplies"},
        {myimg1:<img src='BabyShower/BSFairyLights.jpg' className='mrg2'/>, name1:"Fairy Lights"},
        {myimg1:<img src='BabyShower/BSCenterpieces.jpg' className='mrg2'/>, name1:"Center Pieces"},
 
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
export default BabyShower