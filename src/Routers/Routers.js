// import { createBrowserRouter } from "react-router-dom";
// import Layout from "../components/Layout/Layout";
// import Home from "../pages/Home/Home";

// const router = createBrowserRouter([
//   {
//       path: '/',
//       element: <Layout></Layout>, 
//       children: [
//           {
//               path: '/',
//               element: <Home></Home>
//           },
//           // {
//           //     path: '/about',
//           //     element: <About></About>
//           // },
//           // {
//           //     path: '/services',
//           //     element: <Services></Services>
//           // },
//           // {
//           //     path: '/pricing',
//           //     element: <Pricing></Pricing>
//           // },
//           // {
//           //     path: '/blog',
//           //     element: <Blog></Blog>
//           // },
//           // {
//           //     path: '/contact',
//           //     element: <Contact></Contact>
//           // },
          
//       ]
//   }
// ])

// export default router;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import CarListing from "../pages/CarListing";
// import CarDetails from "../pages/CarDetails";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
// import NotFound from "../pages/NotFound";
// import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/cars" element={<CarListing />} /> */}
      {/* <Route path="/cars/:slug" element={<CarDetails />} /> */}
      {/* <Route path="/blogs" element={<Blog />} /> */}
      {/* <Route path="/blogs/:slug" element={<BlogDetails />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routers;