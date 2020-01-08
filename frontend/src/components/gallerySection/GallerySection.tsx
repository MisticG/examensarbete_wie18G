import React, { Component } from 'react';
import GalleryImage from './GalleryImage';

export default class GallerySection extends Component {
    render() {
        return (
            
            <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                <h1>Galleri</h1>
                <div className="ui stackable three column grid">
                    <GalleryImage />
                </div>
            </div>
        
        )
    }
}