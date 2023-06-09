import React from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import Routers from '../../Routers/Routers';
import { Fragment } from 'react';

const Layout = () => {
    return (
        <Fragment>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </Fragment>
    );
};

export default Layout;