import React, { Component } from 'react';
import '../css/header.css';
import GallerySection from './gallerySection/GallerySection';
import Footer from './Footer';

export default class Gallery extends Component {
//Gör en snygg transition när man laddar in på sidan
    render() {
        return (
            <div>
                <GallerySection />
                <Footer />
            </div>
        )
    }
}
