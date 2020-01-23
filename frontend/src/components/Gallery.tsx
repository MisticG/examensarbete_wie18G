import React, { Component } from 'react';
import '../css/header.css';
import GallerySection from './gallerySection/GallerySection';
import Footer from './Footer';

export default class Gallery extends Component {

    render() {
        return (
            <div>
                <div className="section" style={outer}>
                    <GallerySection />
                </div>
                <Footer />
            </div>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)"
}

