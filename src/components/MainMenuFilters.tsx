import React from "react";
import Filter from "./filters";
import { Divider } from "antd";

const MainMenuFilter: React.FC = () => {
  return (
    <div className="main-menu-filters">
      <div>
        <p
          style={{
            fontWeight: 700,
            color: "#9e9e9e",
          }}
        >
          27 Ergebnisse Fur 787862 Konstanz
        </p>
        <h2
          style={{
            fontWeight: 700,
            color: "#9e9e9e",
            textDecoration: "underline",
          }}
        >
          Zuruck Zum
        </h2>
      </div>
      <div>
        <h2 className="main-menu-filter-heading">Versandart</h2>
        <Divider style={{ margin: "0px" }} />
        <Filter lable={"Selbstabholung"} />
        <Filter lable={"Versand"} />
      </div>
      <div>
        <h2 className="main-menu-filter-heading">Konsistenz</h2>
        <Divider style={{ margin: "0px" }} />
        <Filter lable={"Selbstabholung"} />
        <Filter lable={"Versand"} />
        <Filter lable={"Versand"} />
      </div>
      <div>
        <h2 className="main-menu-filter-heading">Sorte</h2>
        <Divider style={{ margin: "0px" }} />
        <Filter lable={"Selbstabholung"} />
        <Filter lable={"Versand"} />
        <Filter lable={"Versand"} />
        <Filter lable={"Versand"} />
        <Filter lable={"Versand"} />
      </div>
    </div>
  );
};

export default MainMenuFilter;
