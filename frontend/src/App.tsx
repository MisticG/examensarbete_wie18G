import React, { Component } from 'react';
import './App.css';
import LocalRouter from './components/Router';
import Header from './components/Header'
import LatestNews from './components/LatestNews';
import SectionDivider from './components/SectionDivider';
import ServiceSection from './components/ServiceSection';
import border_img from './assets/images/border_bg.jpg';
import border_img2 from './assets/images/border_bg2.jpg';

export default class App extends Component {
    render() {
        return (
          <div>
            <div style={{backgroundColor: "rgba(139, 108, 108, 0.9)"}}>
              <LocalRouter />
            </div>
            <div>
              <Header />
              <LatestNews />
              <SectionDivider image={border_img} />
              <ServiceSection />
              <SectionDivider image={border_img2} />
            </div>
          </div>
        )
    }
}

/*const bgStyle: React.CSSProperties = {
  backgroundImage: `url(${Header_bg})`,
  opacity: 0.7,
  width: "auto",
  height: "95vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
}*/