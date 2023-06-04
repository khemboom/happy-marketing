import React, { useRef, useEffect } from "react";

const AboutUs = ({ sectionRef }) => {
  const ref = useRef(null);

  useEffect(() => {
    sectionRef(ref);
  }, [sectionRef]);

  return (
    <div ref={ref} className="aboutUs mt-4">
      <h1 className="titles">ABOUT US</h1>
      <div className="aboutUs-details">
        <p>
          Welcome to Happy Digital Marketing Agency, where we bring the magic of happiness to your digital marketing efforts! 
          Our team of passionate and creative professionals is dedicated to helping businesses like yours shine bright in the online world.
        </p>
        <p>
          At Happy Marketing, we firmly believe that happiness is contagious, and we strive to infuse every aspect of our work with joy, enthusiasm, and a positive attitude. 
          We understand that digital marketing can often be overwhelming, which is why we're here to simplify the process and make it an enjoyable experience for you.
        </p>
      </div>
    </div>
  )
};

export default AboutUs;