import logo from "./logo.svg";
import hubprotech from "../src/assets/app-logo/hubprotech.svg";
import mobile_protait from "../src/assets/mobile_protait.jpg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: "default",
        image:
          `https://static.vecteezy.com/system/resources/previews/023/610/102/non_2x/mobile-phone-device-cell-phone-of-electronic-mockup-phone-png.png` ||
          mobile_protait,
        description: `Mobile (Portait)`,
      },
      {
        title: "Min-Width : 480px",
        image:
          `https://static.vecteezy.com/system/resources/previews/023/610/102/non_2x/mobile-phone-device-cell-phone-of-electronic-mockup-phone-png.png` ||
          mobile_protait,
        description: `Mobile (Landscape)`,
      },
      {
        title: "Min-Width : 768px",
        image:
          `https://static.vecteezy.com/system/resources/previews/023/610/102/non_2x/mobile-phone-device-cell-phone-of-electronic-mockup-phone-png.png` ||
          mobile_protait,
        description: `Tablet (Portait)`,
      },
      {
        title: "Min-Width : 992px",
        image:
          `https://static.vecteezy.com/system/resources/previews/023/610/102/non_2x/mobile-phone-device-cell-phone-of-electronic-mockup-phone-png.png` ||
          mobile_protait,
        description: `Tablet (Landscape), Laptop and Smaller Desktops`,
      },
      {
        title: "Min-Width : 1200px",
        image:
          `https://static.vecteezy.com/system/resources/previews/023/610/102/non_2x/mobile-phone-device-cell-phone-of-electronic-mockup-phone-png.png` ||
          mobile_protait,
        description: `Large Desktop Screens, TV, etc.`,
      },
    ];

    setCard(data);
  }, []);

  return (
    <div className="div-wrapper">
      <div className="logo-holder">
        <div className="app-logo-wrapper">
          <img src={hubprotech} alt="" width={160} />
        </div>
      </div>
      <div className="header">
        <div className="heading">
          <h1>Responsive Breakpoints</h1>
        </div>
        <div className="sub-heading">
          <div className="line line-left"></div>
          <h1>Cheatsheet</h1>
          <div className="line line-right"></div>
        </div>
      </div>
      <div className="content">
        <div className="card-wrappper">
          {card.map((m) => (
            <div className="card">
              <div className="card-header">
                <div className="card-image">
                  <img src={m.image} width={120} alt="" />
                </div>
                <div className="card-title">
                  <p>{m.title}</p>
                </div>
              </div>
              <div className="card-footer">
                <p>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="line line-left"></div>
        <div className="paragrapgh">
          <a href="www.hubprotech.com">
            <p>www.hubprotech.com</p>
          </a>
        </div>
        <div className="line line-right"></div>
      </div>
    </div>
  );
}

export default App;
