const BottomBar = ({setAllAvailable,setAllUnAvailable,onApplySetting}) => {
    return (
      <>
        <div className="bottom-bar-container">
          <button onClick={()=>{setAllUnAvailable()}}>All UNAVAILABLE</button>
          <button onClick={()=>{setAllAvailable()}}>ALL AVAILABLE</button>
          <button onClick={()=>{
              onApplySetting();
          }}>APPLY</button>
        </div>
      </>
    );
  };
  
  export default BottomBar;
  