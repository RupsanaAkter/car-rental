import React from 'react';

import { Col, Container, Row } from 'reactstrap';
import Herosider from '../../components/UI/Herosider/Herosider';
import Helmet from '../../components/Helmet/Helmet';
import Findcar from '../../components/UI/Findcar/Findcar';
import Aboutsection from '../../components/UI/Aboutsection/Aboutsection';
import ServiceList from '../../components/UI/ServiceList/ServiceList';
import carData from '../../data/Cardata/Cardata'
import Caritem from '../../components/UI/Caritem/Caritem';
import DriverSection from '../../components/UI/DriverSection/DriverSection';
import Testimonial from '../../components/UI/Testimonial/Testimonial';
import Bloglist from '../../components/UI/Bloglist/Bloglist';

const Home = () => {
    return (
        <Helmet title="Home">
        {/* ============= hero section ===========   */}
           <section className="p-0 hero__slider-section">
          <Herosider />
  
          <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col lg="4" md="4">
                  <div className="find__cars-left">
                    <h2>Find your best car here</h2>
                  </div>
                </Col>
  
                <Col lg="8" md="8" sm="12">
                  {/* <Findcar/> */}
                </Col>
              </Row>
            </Container>
          </div>
        </section>   
        {/* =========== about section ================ */}
         <Aboutsection />
        {/* ========== services section ============  */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">See our</h6>
                <h2 className="section__title">Popular Services</h2>
              </Col>
  
              <ServiceList />
            </Row>
          </Container>
        </section> 
        {/* =========== car offer section ============= */}
         <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h6 className="section__subtitle">Come with</h6>
                <h2 className="section__title">Hot Offers</h2>
              </Col>
  
              {carData.slice(0, 6).map((item) => (
                <Caritem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section> 
        {/* =========== become a driver section ============ */}
         <DriverSection /> 
  
        {/* =========== testimonial section =========== */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4 text-center">
                <h6 className="section__subtitle">Our clients says</h6>
                <h2 className="section__title">Testimonials</h2>
              </Col>
  
              <Testimonial />
            </Row>
          </Container>
        </section> 
  
        {/* =============== blog section =========== */}
         <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">Explore our blogs</h6>
                <h2 className="section__title">Latest Blogs</h2>
              </Col>
  
              <Bloglist />
            </Row>
          </Container>
        </section> 
      </Helmet>
    );
};

export default Home;