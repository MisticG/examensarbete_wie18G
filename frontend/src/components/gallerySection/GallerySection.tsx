import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import FadeIn from 'react-fade-in';

export default class GallerySection extends Component {
    render() {
        return (
            <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                <h1 style={{marginBottom: "1em"}}>Galleri</h1>
                <FadeIn delay={200} transitionDuration={1000}>
                    <div className="ui stackable three column grid">
                        <GalleryImage />
                    </div>
                </FadeIn>
            </div>
        )
    }
}