import React, { Component } from 'react';
import '../css/header.css';
import ColumnLeft from './ColumnLeft';
import IsleofSky from '../assets/images/scotland_IoS.jpg';
import Footer from './Footer';

export default class About extends Component {
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores debitis omnis perferendis? Provident libero pariatur nisi! Esse fuga quibusdam natus accusantium voluptate. Blanditiis, similique! Quia quae cupiditate natus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit placeat laudantium vitae voluptatem quasi quam totam, eligendi unde officia aut culpa nostrum molestias deleniti voluptatibus, mollitia velit perferendis quia."
    render() {
        return (
            <div>
                <div className="section" style={outer}>
                    <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                        <h1>Om oss</h1>
                        <ColumnLeft text={this.text} image={IsleofSky} altText="Isle of sky"/> 
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)"
}
