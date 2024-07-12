import "../styles/features.css";
import men from "../../public/men1.png";
import Rectangle from "../../public/Rectangle 12.png";
import star from "../../public/img_union.png";
import mike from "../../public/mike.png";
// import AOS from 'aos';
// import 'aos/dist/aos.css';


export const Features = () => {
  return (
    <>
      <div className="text-white font-outfit p-10 feature-container ">
        <h1 className="flex items-center justify-center w-[80%] m-auto h-[65px] ">
          Features
        </h1>

        <div className="upper-container-main h-[653px] m-auto p-5 gap-16 flex flex-col lg:flex-row">
          <div className="img-div order-2 lg:order-1 w-full lg:w-[100%] h-[545px] flex items-center justify-center">
            <img
            data-aos="zoom-in"
              src={Rectangle}
              alt="men img"
              className="mt-[110px] w-[80%] h-[80%]"
            />
          </div>

          <div 
          // data-aos="fade-left"
           className="order-1 lg:order-2 w-full lg:w-1/2 flex items-center justify-center">
            <div className="text-center text-div">
              <div className="Features-union">
                <img src={star} alt="star img" />
                <h2 className="font-[500] w-[90%] m-auto h-[35px] text-center">
                  INFLUENCER AI
                </h2>
              </div>

              <h1 className="text-2xl font-bold mb-4">Create Influencer</h1>
              <p className="text-lg">
                With this feature, users can create a virtual influencer with
                several sub-features, including:
              </p>
              <div className="p-div">
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">Swap:</strong>{" "}
                  Seamlessly swap faces.
                </p>
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">
                    Talkify:
                  </strong>{" "}
                  Add realistic speech to your influencer.
                </p>
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">
                    Generate Images:
                  </strong>{" "}
                  Create high-quality images.
                </p>
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">
                    Customization:
                  </strong>{" "}
                  Change the voice, name, and other settings of your generated
                  influencer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second cards */}

        <div className="downContainer flex flex-col  lg:flex-row ">
          <div className="left-container middle-container oneCard order-1 lg:order-2 w-full lg:w-1/2">
            <div className="Features-union">
              <img src={star} alt="star img" />
              <h2 className=" font-[500] w-[90%] m-auto h-[35px] text-center">
                INFLUENCER AI
              </h2>
            </div>
            <h1>Create Influencer</h1>
            <p>
              With this feature, users can create a virtual influencer with
              several sub-features, including:
            </p>
            <div className="p-div">
              <p>
                <strong className="text-[rgb(173, 170, 170)]">Swap:</strong>{" "}
                Seamlessly swap faces.
              </p>
              <p>
                <strong className="text-[rgb(173, 170, 170)]">Talkify:</strong>{" "}
                Add realistic speech to your influencer.
              </p>
              <p>
                <strong className="text-[rgb(173, 170, 170)]">
                  Generate Images:
                </strong>{" "}
                Create high-quality images.
              </p>
              <p>
                <strong className="text-[rgb(173, 170, 170)]">
                  Customization:
                </strong>{" "}
                Change the voice, name, and other settings of your generated
                influencer.
              </p>
            </div>

            <div className="">
              <img
              data-aos="zoom-in"
                src={Rectangle}
                alt="men img"
                className="rounded-lg mt-[20px] w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="left-container  order-1 lg:order-2 w-full lg:w-1/2">
            <div className="Features-union">
              <img src={star} alt="star img" />
              <h2 className=" font-[500] w-[90%] m-auto h-[35px] text-center">
                Face Swap
              </h2>
            </div>
            <h1>Realistic Face Swaps in Seconds</h1>
            <p>
              Users can swap their face into any video by simply uploading an
              image and the video where the swap will occur.
            </p>

            <div className="">
              <img
              data-aos="zoom-in"
                src={men}
                alt="men img"
                className="rounded-lg mt-[20px] w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="left-container order-1 lg:order-2 w-full lg:w-1/2 ">
            <div className="Features-union">
              <img src={star} alt="star img" />

              <h2 className=" font-[500] w-[90%] m-auto h-[35px] text-center">
                {" "}
                Voice Change
              </h2>
            </div>
            <h1>Transform Voices with AI-Powered Precision</h1>
            <p>
              Users can lip-sync any video by uploading the video and an audio
              file, or use text sync to input text and generate audio.
            </p>
            <div className="">
              <img
              data-aos="zoom-in"
                src={mike}
                alt="mike img"
                className="mt-[20px] rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
