import React, { Component } from 'react';

export default class GalleryImage extends Component {
    
    importAll(r: any) {
        return r.keys().map(r);
    }
      
    images = this.importAll(require.context('../../assets/images/', false, /\.(png|jpe?g|svg)$/));

    allImages() {
        return this.images.map((image: string) => (
            <div>
                <img src={image} style={{width: "300px", height: "300px"}} />
            </div>
        ))
    }

    render() {
        return (
            <div>{this.allImages()}</div>
        )
        
    }
}