import img1 from "../../public/deepfake01.png";
import img2 from "../../public/deepfake02.png";
import img3 from "../../public/deepfake03.png";
import star from "../../public/img_union.png";
import "../styles/useCases.css";
import Slider from "./SliderUseCases";
export const UseCases = () => {
  return (
    <>
      <section className="useCases-Section text-white h-[450px]">
        <h1 className="text-center mb-[25px]">Use Cases</h1>

        <div className="useCases-scrolling">
          <div className="useCases-container">
            <div className="useCases-innerContainer">
              <div className="useCases-images">
                <img src={img1} alt=" img-1" />
              </div>
              <div className="useCases-innerItem">
                <div className="useCases-iconImages">
                  <img src={star} alt="union star" />
                  <h2>Face swap</h2>
                </div>

                <p>Swap your face with your favourite celebrity</p>
              </div>
            </div>
            <div className="useCases-innerContainer">
              <div className="useCases-images">
                <img src={img2} alt=" img-2" />
              </div>
              <div className="useCases-innerItem">
                <div className="useCases-iconImages">
                  <img src={star} alt="union star" />
                  <h2>Face Enhancement</h2>
                </div>

                <p>
                  Making your content, marketing and ads more engaging and
                  personalized.
                </p>
              </div>
            </div>
            <div className="useCases-innerContainer">
              <div className="useCases-images">
                <img src={img3} alt=" img-3" />
              </div>
              <div className="useCases-innerItem">
                <div className="useCases-iconImages">
                  <img src={star} alt="union star" />
                  <h2>Video Translate </h2>
                </div>

                <p>Transform your Marketing Video into Viral Sensation</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <Slider />
        </div>
      </section>
    </>
  );
};
