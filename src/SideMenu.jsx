const SideMenu = ({ menuItems = ["temop1"],selectedMenu,setSelectedMenu,setCardData }) => {
    return (
      <>
        <div className="side-menu-container">
          {menuItems.map((value,index) => {
              let tempClass="";
              if(index==selectedMenu)
              {
                  tempClass="selected-menu";
              }
            return <div className={tempClass} onClick={()=>{setSelectedMenu(index);
                setCardData(index)
            }}> {value}</div>;
          })}
        </div>
      </>
    );
  };
  
  export default SideMenu;
  