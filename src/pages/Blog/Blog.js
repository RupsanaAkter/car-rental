import React from 'react';
import { Container, Row } from 'reactstrap';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Helmet from '../../components/Helmet/Helmet';
import Bloglist from '../../components/UI/Bloglist/Bloglist'
const Blog = () => {
    return (
        <Helmet title="Blogs">
        <CommonSection title="Blogs" />
        <section>
          <Container>
            <Row>
              <Bloglist />
             
            </Row>
          </Container>
        </section>
      </Helmet>
    );
};

export default Blog;