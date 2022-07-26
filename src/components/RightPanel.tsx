import React from "react";
import { Tag, Button } from "antd";

const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
      <div>
        <Tag color="#F1A207" style={{ borderRadius: "40px" }}>
          Flussing
        </Tag>
        <Tag color="#FBE194" style={{ borderRadius: "40px" }}>
          Cremig
        </Tag>
        <Tag color="#FBE194" style={{ borderRadius: "40px" }}>
          Waben
        </Tag>
      </div>
      <div style={{ display: "flex" }}>
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "0px",
          }}
        >
          Wald
        </h2>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "normal",
            marginTop: "14px",
          }}
        >
          blumen
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "35px",
            }}
          >
            9,20 €
          </div>
          <div>2,30 € / 100g</div>
        </div>
        <Button
          type="primary"
          style={{
            background: "#F2A00C",
            borderColor: "#F2A00C",
            borderRadius: "50px",
            fontWeight: "700",
            width: "70%",
            height: "45px",
          }}
          onClick={() => alert("you pressed  IN DEN WARENKORN")}
        >
          IN DEN WARENKORN
        </Button>
      </div>
      <div>
        <div>Lorem ipsum dolor</div>
        <div>Lorem ipsum dolor</div>
      </div>
      <div>
        <div>Gewicht: 400g</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Button
          type="primary"
          style={{
            background: "#FC6B34",
            borderColor: "#FC6B34",
            borderRadius: "50px",
            fontWeight: "700",
            width: "49%",
          }}
          onClick={() => alert("you pressed   ALS GESCHENK SENDEN")}
        >
          ALS GESCHENK SENDEN
        </Button>
        <Button
          type="primary"
          style={{
            background: "#FBE194",
            borderColor: "#FBE194",
            borderRadius: "50px",
            fontWeight: "700",
            width: "49%",
          }}
          onClick={() => alert("you pressed    IM ABO BESTLLEN")}
        >
          IM ABO BESTLLEN
        </Button>
      </div>
    </div>
  );
};

export default RightPanel;
