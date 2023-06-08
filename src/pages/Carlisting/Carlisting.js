import React from 'react';
import Caritem from '../../components/UI/Caritem/Caritem';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Helmet from '../../components/Helmet/Helmet';
import carData from '../../data/Cardata/Cardata'
const Carlisting = () => {
    return (
        <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <Caritem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
    );
};

export default Carlisting;