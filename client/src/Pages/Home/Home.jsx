import React from "react";
import "../../App.css";
import LeftSidebar from '../../components/LeftSideBar/LeftSideBar.jsx';
import RightSidebar from '../../components/RightSideBar/RightSideBar.jsx';
import HomeMainbar from '../../components/HomeMainBar/HomeMainBar.jsx'

const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar/>
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};
export default Home;