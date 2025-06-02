import React from "react";

const Anniversary = ()=>{
    const myobj = [
        {myimg1:<img src='anniversary/anOutfits.jpg' className='mrg2'/>, name1:"Couple Special Wear"},
        {myimg1:<img src='anniversary/anCake2.jpg' className='mrg2'/>, name1:" Cakes"},
        {myimg1:<img src='anniversary/anDec1.jpg' className='mrg2'/>, name1:"Decoration "},
        {myimg1:<img src='anniversary/anFlowers1.jpg' className='mrg2'/>, name1:"FLowers "},
        {myimg1:<img src='anniversary/anfairylights.jpg' className='mrg2'/>, name1:"Fairy Lights"},
        {myimg1:<img src='anniversary/anPartySupplies.jpg' className='mrg2'/>, name1:" Party Supplies"},
        {myimg1:<img src='anniversary/anGif1.jpg' className='mrg2'/>, name1:"Gifts "},
        {myimg1:<img src='anniversary/anBanners.jpg' className='mrg2'/>, name1:" Banners"},
        {myimg1:<img src='anniversary/anReturnGif.jpg' className='mrg2'/>, name1:" Return Gifts"},
    ];
    return(
        <div>
                    <div className="mrgWoMenDiv">
        <div className="Bridetxt" style={{color:"maroon"}}><u>Anniversary</u></div>
        <div className="BrideDiv">
            {
                myobj.map((val,index)=>(
                    <div key={index} className="BrideCard">
                            <div className="BrideInnerImg">{val.myimg1}</div>
                            <div className="BrideInnerText">{val.name1}</div>
                    </div>
                ))
            }
        </div>
        </div>
        </div>
    )
}
export default Anniversary