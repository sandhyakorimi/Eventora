import React from "react";
import { useNavigate } from "react-router-dom";

const Marriage=()=>{
    const navigate = useNavigate();
    const myobj = [
        {myimg1:<img src='marriage/mrgSpecialWear2.jpg' className='mrg1'/>, name1:"Couples Special"},
        {myimg1:<img src='marriage/flowerdec3.jpg' className='mrg1'/>, name1:"Flower Decors"},
  {myimg1:<img src='marriage/mandap1.jpg' className='mrg1'/>, name1: "Wedding Mandap"},
  {myimg1:<img src='marriage/lighting1.jpg' className='mrg1'/>, name1:"Lighting Setup"},
  {myimg1:<img src='marriage/poojaItem1.jpg' className='mrg1'/>, name1:"Pooja Items"},
  {myimg1:<img src='marriage/dining1.jpg' className='mrg1'/>,name1:"Dining Plan"},
  {myimg1:<img src='BabyShower/BSPhotographyBooking.jpg' className='mrg1'/>, name1:"Photography"},
  {myimg1:<img src='BabyShower/BSMusicSystems.jpg' className='mrg1'/>, name1:"Music Systems"},
    ];

    const myobj2 = [
        {myimg2:<img src='marriage/GMarriage.jpg' className='mrg2'/>, name2:"Marriage OutFit"},
        {myimg2:<img src='marriage/Gwatches.jpg' className='mrg2'/>, name2:"Watches"},
        {myimg2:<img src='marriage/Jewellery.jpg' className='mrg2'/>, name2:"Jewellery"},
        {myimg2:<img src='marriage/GRings.jpg' className='mrg2'/>, name2:"Rings"},
        {myimg2:<img src='marriage/GTie.jpg' className='mrg2'/>, name2:"Tie"},
        {myimg2:<img src='marriage/GShoes.jpg' className='mrg2'/>, name2:"Matching Shoes"},
        {myimg2:<img src='marriage/GGlasses.jpg' className='mrg2'/>, name2:"Glasses"},
        // {myimg2:<img src='marriage/GroomingNpersonalCare.jpg' className='mrg2'/>, name2:"GroomingNPersonal"},


    ];
    const myobj3 = [
        {myimg2:<img src='marriage/Saree2.jpg' className='mrg2'/>, name2:"Sarees"},
        {myimg2:<img src='marriage/WeddingOutfitG.jpg' className='mrg2'/>, name2:"Lehangas"},
        {myimg2:<img src='marriage/Jewellery.jpg' className='mrg2'/>, name2:"Jewellery"},
        {myimg2:<img src='marriage/MakeupNGrooming.jpg' className='mrg2'/>, name2:"MakeupNGrooming"},
        {myimg2:<img src='marriage/WFootwear.jpg' className='mrg2'/>, name2:"Foot Wear"},
        {myimg2:<img src='marriage/WHair.jpg' className='mrg2'/>, name2:"Hair Accessories"},
        {myimg2:<img src='marriage/WBridalRobe.jpg' className='mrg2'/>, name2:"Bridal Robe"},
        {myimg2:<img src='marriage/WBangles2.jpg' className='mrg2'/>, name2:"Bangles"},
    ];
    return (
       <div className="MarriageBody">
         
         <div className="wedDecor">
         <div className="Wedtxt"><u><h2> Wed Decor</h2></u></div>
         <div className="marriageDiv">
           {
            myobj.map((val,index)=>(
                <div key={index} className="marriageCard" onClick={()=>{
                    if(val.name1=="Couples Special"){
                        navigate("/marriage/couplewear")
                    }
                    else if(val.name1=="Flower Decors"){
                        navigate("/marriage/flowerdecor")
                    }
                    else if(val.name1=="Wedding Mandap"){
                        navigate("/marriage/mandap")
                    }
                    else if(val.name1=="Lighting Setup"){
                        navigate("/marriage/lighting")
                    }
                }}>
                    <div className="MrgInnerDiv">{val.myimg1}</div>
                    <div className="MrgInnerText">{val.name1}</div>
                </div>
            ))
           }
         </div>
        </div>

        <div className="mrgMenDiv">
        <div className="Groomtxt"><u><h2>Groom Collection</h2></u></div>
        <div className="GroomDiv">
            {
                myobj2.map((val,index)=>(
                    <div key={index} className="GroomCard" onClick={()=>{
                        if(val.name2=="Marriage OutFit"){
                            navigate("/marriage/GroomOutfit");
                        }
                        else if(val.name2=="Watches"){
                            navigate("/marriage/watches")
                        }
                        else if(val.name2=="Jewellery"){
                            navigate("/marriage/menjewel")
                        }
                        else if(val.name2=="Rings"){
                            navigate("/marriage/rings")
                        }
                        else if(val.name2=="Tie"){
                            navigate("/marriage/tie")
                        }
                        else if(val.name2=="Matching Shoes"){
                            navigate("/marriage/shoe")
                        }
                        else if(val.name2=="Glasses"){
                            navigate("/marriage/glasses")
                        }
                    }}

                    >
                            <div className="GroomInnerImg">{val.myimg2}</div>
                            <div className="GroomInnerText">{val.name2}</div>
                    </div>
                ))
            }
        </div>
        </div>

        <div className="mrgWoMenDiv">
        <div className="Bridetxt" style={{color:"maroon"}}><u><h2>Bridal Collection</h2></u></div>
        <div className="BrideDiv">
            {
                myobj3.map((val,index)=>(
                    <div key={index} className="BrideCard"
                    onClick={()=>{
                        if(val.name2=="Sarees"){
                            navigate("/marriage/bsarees");
                        }
                        else if(val.name2=="Lehangas"){
                            navigate("/marriage/blehangas");
                        }
                        else if(val.name2=="Jewellery"){
                            navigate("/marriage/bjewellery");
                        }
                        else if(val.name2=="MakeupNGrooming"){
                            navigate("/marriage/makeupNGrooming");
                        }
                        else if(val.name2=="Foot Wear"){
                            navigate("/marriage/footwear");
                        }
                        else if(val.name2=="Haldi wear"){
                            navigate("/marriage/haldiwear");
                        }
                        else if(val.name2=="Hair Accessories"){
                            navigate("/marriage/hairaccessories");
                        }
                        else if(val.name2=="Bridal Robe"){
                            navigate("/marriage/bridal robe");
                        }
                        else if(val.name2=="Bangles"){
                            navigate("/marriage/bangles");
                        }
                    }}>
                            <div className="BrideInnerImg" >{val.myimg2}</div>
                            <div className="BrideInnerText">{val.name2}</div>
                    </div>
                ))
            }
        </div>
        </div>

      

      </div>
      );
}
export default Marriage