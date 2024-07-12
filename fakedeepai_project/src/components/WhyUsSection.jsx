import checked from "../../public/checked.png";
import crossed from "../../public/crossed.png";
import fakefreeIcon from "../../public/logo_icon.png";
import remakerIcon from "../../public/remaker logo.png";
import soraIcon from "../../public/soraIcon.png";
import "../styles/table.css";

const Table = () => {
  return (
    <>
      <section className="whyUsSection">
        <h1 className="whyUsSection-h1 text-center">Why Us??</h1>
        <div className="whyUsSection-inner">
          <div className="whyUsSection-scrolling">        
          <aside className="aside-section">
            <div className="aside-innerSection text-white">
              <h1>Features</h1>
              <p>Face Swap</p>
              <p>Voice Change</p>
              <p>Text to Voice</p>
              <p>Text to image</p>
              <p>Realistic Avatar</p>
            </div>
          </aside>
          <div className="rightSide-container">
            <div className="scroll-container">
            <div className="logo-upperContainer text-white">
              <div className="logo-imgContainer">
                <img src={fakefreeIcon} alt="fakefreeIcon" />
                <h2>deep <span className="logoIcon007">fake AI</span></h2>
              </div>
              <div className="logo-imgContainer">
                <img src={remakerIcon} alt="remakerIcon" />
                <h2>Remaker</h2>
              </div>
              <div className="logo-imgContainer">
                <img src={soraIcon} alt="soraIcon" />
                <h2>SORA</h2>
              </div>
            </div>
            <div className="logo-upperContainer">
              <img src={checked} alt="checked" />
              <img src={checked} alt="checked" />
              <img src={checked} alt="checked" />
            </div>
            <div className="logo-upperContainer">
              <img src={checked} alt="checked" />
              <img src={checked} alt="checked" />
              <img src={crossed} alt="crossed" />
            </div>
            <div className="logo-upperContainer">
              <img src={checked} alt="checked" />
              <img src={crossed} alt="crossed" />
              <img src={checked} alt="checked" />
            </div>
            <div className="logo-upperContainer">
              <img src={checked} alt="checked" />
              <img src={crossed} alt="crossed" />
              <img src={checked} alt="checked" />
            </div>
            <div className="logo-upperContainer">
              <img src={checked} alt="checked" />
              <img src={checked} alt="checked" />
              <img src={crossed} alt="crossed" />
            </div>
          </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
