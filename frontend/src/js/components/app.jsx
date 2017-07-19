import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './common/navbar';
import Footer from './common/footer';
import Home from './home/home';

export default function () {
  return (
    <div className="container">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  );
}
