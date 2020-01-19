import React, { Component } from 'react';

export default class GalleryImage extends Component {
    
    importAll(r: any) {
        return r.keys().map(r);
    }
      
    images = this.importAll(require.context('../../assets/images/gallery/', false, /\.(png|jpe?g|svg)$/));

    allImages() {
        return this.images.map((image: string) => (
            <div className="column" key={image}>
                <img src={image} style={imgStyle} />
            </div>
        ))
    }

    render() {
        return (
            this.allImages()
        )
    }
}

const imgStyle: React.CSSProperties = {
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
}