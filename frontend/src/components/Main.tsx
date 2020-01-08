import React, { Component } from 'react';
import '../App.css';
//import LocalRouter from './components/Router';
import Header from './Header'
import LatestNews from './LatestNews';
import SectionDivider from './SectionDivider';
import ServiceSection from './ServiceSection';
import border_img from '../assets/images/border_bg.jpg'
import border_img2 from '../assets/images/border_bg2.jpg';
import GallerySection from './gallerySection/GallerySection';
import Footer from './Footer';

export default class Main extends Component {
    render() {
        return (
          <div>
            <div>
              <Header />
              <LatestNews />
              <SectionDivider image={border_img} />
              <ServiceSection />
              <SectionDivider image={border_img2} />
              <GallerySection />
              <Footer />
            </div>
          </div>
        )
    }
}