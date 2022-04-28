import "./App.css";
import BottomBar from "./BottomBar";
import SideMenu from "./SideMenu";
import MenuCard from "./MenuCard";
import MenuData from "./menu.json";

import { useState, useEffect } from "react";

export default function App() {
  let [allData, setAllData] = useState(null);
  let [sideMenuItem, setSideMenuItem] = useState([]);
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [cardData, setCardData] = useState([]);

  useEffect(() => {
    //let menuData = JSON.parse(MenuData);
    console.log(MenuData);
    setAllData(MenuData.menuDetails);
    let tempData = JSON.parse(JSON.stringify(MenuData));
    setCardData([...tempData.menuDetails.EATORAMA]);
    let tempSideMenuItem = Object.keys(MenuData.menuDetails);
    setSideMenuItem(tempSideMenuItem);
  }, []);

  const setAllAvailable = () => {
    if (allData !== null) {
      let tempData = null;
      let selectObj = null;

      if (selectedMenu === 0) {
        tempData = allData.EATORAMA;
        selectObj = "EATORAMA";
      } else if (selectedMenu === 1) {
        tempData = allData.STARBUCKS;
        selectObj = "STARBUCKS";
      } else {
        tempData = allData["SOUP STATION"];
        selectObj = "SOUP STATION";
      }

      let finalData = tempData.map((value) => {
        return { ...value, outofstock: false };
      });

      let newAllData = JSON.parse(JSON.stringify(allData));
      setAllData({ ...newAllData, [selectObj]: finalData });
      setCardData([...finalData]);
    }
  };

  const setAllUnAvailable = () => {
    if (allData !== null) {
      let tempData = null;
      let selectObj = null;

      if (selectedMenu === 0) {
        tempData = allData.EATORAMA;
        selectObj = "EATORAMA";
      } else if (selectedMenu === 1) {
        tempData = allData.STARBUCKS;
        selectObj = "STARBUCKS";
      } else {
        tempData = allData["SOUP STATION"];
        selectObj = "SOUP STATION";
      }

      let finalData = tempData.map((value) => {
        return { ...value, outofstock: true };
      });

      let newAllData = JSON.parse(JSON.stringify(allData));
      setAllData({ ...newAllData, [selectObj]: finalData });
      setCardData([...finalData]);
    }
  };

  const onApplySetting = () => {
    let tempData = JSON.parse(JSON.stringify(cardData));
    if (selectedMenu === 0) {
      setAllData({ ...allData, EATORAMA: tempData });
    } else if (selectedMenu === 1) {
      setAllData({ ...allData, STARBUCKS: tempData });
    } else {
      setAllData({ ...allData, ["SOUP STATION"]: tempData });
    }
  };

  const setTempMenuData = (menuData) => {
    setCardData(menuData);
  };

  const setCardInfo = (selectedMenu) => {
    if (allData !== null) {
      if (selectedMenu === 0) {
        setCardData(JSON.parse(JSON.stringify(allData.EATORAMA)));
      } else if (selectedMenu === 1) {
        setCardData(JSON.parse(JSON.stringify(allData.STARBUCKS)));
      } else {
        setCardData(JSON.parse(JSON.stringify(allData["SOUP STATION"])));
      }
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="header-container"></div>

        <div className="content-container">
          <div className="mid-container">
            <SideMenu
              menuItems={sideMenuItem}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              setCardData={setCardInfo}
            />
            <MenuCard menuData={cardData} setTempMenuData={setTempMenuData} />
          </div>
          <div className="bottom-container">
            <BottomBar
              setAllAvailable={setAllAvailable}
              setAllUnAvailable={setAllUnAvailable}
              onApplySetting={onApplySetting}
            />
          </div>
        </div>
      </div>
    </>
  );
}
