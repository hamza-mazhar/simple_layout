import React from "react";
import MainMenuFilter from "../components/MainMenuFilters";
import RightPanel from "../components/RightPanel";
import HomePageContent from "../components/HomePageContent";
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <MainMenuFilter />
      <HomePageContent />
      <RightPanel />
    </div>
  );
};

export default HomePage;
