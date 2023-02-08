import React from "react";
import image from "../../assets/image-web-3-desktop.jpg";
import "./section.css";
const Section = () => {
  return (
    <section className="container-section-1">
      <div className="section-1">
        <div className="section-1-container-image">
        </div>
        <div className="section-1-info">
          <h2 className="section-1-title">The Bright Future of Web 3.0?</h2>
          <div className="section-1-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam
              amet eos nam sequi sint non repellendus impedit fugiat eligendi
              obcaecati adipisci qui explicabo nisi quos rem, officia numquam
              distinctio.
            </p>
            <button className="button-read">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="section-2">
        <h1 className="section-2-title">New</h1>

        <div className="art">
          <h3 className="art-title">Hydrogen VS Electroc cars</h3>
          <p className="art-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="art">
          <h3 className="art-title">The Downsides of Artistry</h3>
          <p className="art-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="art">
          <h3 className="art-title">is VC Funding Drying Up</h3>
          <p className="art-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       
      </div>
    </section>
  );
};

export default Section;
