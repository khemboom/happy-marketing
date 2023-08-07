import React, { useRef, useEffect, useState} from "react";
import { Carousel } from "react-bootstrap";

// images for slides
import seo from '../assets/images/seo.jpg';
import social from '../assets/images/social.jpg';
import content from '../assets/images/content.jpg';
import marketing from '../assets/images/marketing.jpg';
import affiliate from '../assets/images/affiliate.jpg';

const Services = ({ sectionRef }) => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    sectionRef(ref);
  }, [sectionRef]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div ref={ref}>
        <h1 className="titles services-title">OUR SERVICES</h1>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 img-service"
              src={seo}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>SEO</h3>
              <p>Our goal is to get your business to rank higher in Google search results, 
                ultimately increasing search engine traffic to the business’s website. 
                Overall, using SEO provides a range of benefits that contribute to increased visibility, 
                targeted traffic, improved user experience, brand credibility, and long-term success 
                for businesses and website owners.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-service"
              src={social}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>SOCIAL MEDIA MARKETING & MANAGEMENT</h3>
              <p>Using Social Media Marketing will provide your business or brand a competitive advantage, 
                it allows businesses to increase brand awareness, engage with their audience, drive website traffic, 
                generate leads, gather insights, and maintain a competitive edge in the digital landscape.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-service"
              src={content}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>CONTENT MARKETING</h3>
              <p>
                Content marketing uses storytelling and information sharing to increase brand awareness.
                Content marketing is about building a sustainable, trusting relationship with your customers 
                that can potentially lead to many sales over time, not just making a single transaction.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-service"
              src={marketing}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>MARKETING ANALYTICS</h3>
              <p>
                One of the major advantages of digital marketing is that it is highly trackable and measurable.
                This will allow business owners and marketers to learn what is successful with consumers 
                and adapt their marketing messages moving forward.
                Understanding all of this data and using it to make good strategic decisions is an important 
                part of the business, and one that sets them apart from their traditional counterparts.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-service"
              src={affiliate}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>AFFILIATE MARKETING</h3>
              <p>
                Also known as influencer marketing, affiliate marketing utilizes the ever-growing popularity of industry experts and social media influencers. 
                In working with these third-party influencers, your organization will collaborate to promote your products or services for compensation. 
                In collaboration, influencers will engage their audience with posts, blogs, or videos to bring in more business for your organization and create new leads.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Services;