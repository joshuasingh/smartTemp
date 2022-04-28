
import { useState } from "react";

const MenuCard = ({menuData,setTempMenuData}) => {
    
    const [selectedId,setSelectedId]=useState([]);


     


    const handleColorChange=(event,menuDataValue)=>{
       
        menuDataValue.outofstock=!menuDataValue.outofstock;

       let menuDataTemp=menuData.map((value)=>{
           if(value.foodid===menuDataValue.foodid)
           {
               return menuDataValue;
           }
           return value
       })
       setTempMenuData(menuDataTemp);
    }
    
     



    return (
      <>
        <div className="menu-card-container">
          {menuData.map((value) => {
              let tempClass="menu-card";
              if(value.outofstock){
                  tempClass+=" menu-card-unavailable";
              }
              else{
                tempClass+=" menu-card-available";
              }
            return (
              <>
                <div className={tempClass} onClick={(e)=>{handleColorChange(e,value);}}>
                  {value.foodname}
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  
  export default MenuCard;
  